use std::{collections::HashMap, sync::Arc};
use tauri::{AppHandle, Manager, Window, async_runtime::spawn};
use tokio::sync::RwLock;
use serde::{Serialize, Deserialize};
#[cfg(target_os = "macos")]
use objc::{msg_send, sel, sel_impl};
#[cfg(target_os = "macos")]
use cocoa::base::{id, YES, NO};
#[cfg(target_os = "macos")]
use core_graphics::{
    event::CGEvent,
    event_source::{CGEventSource, CGEventSourceStateID},
};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Bounds {
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SetBoundsPayload {
    pub name: String,
    pub bounds: Bounds,
}

pub struct FakeWindowBounds(pub Arc<RwLock<HashMap<String, HashMap<String, Bounds>>>>);

pub fn init(app: &AppHandle) {
    println!("[FakeWindow] Initializing FakeWindowBounds state");
    app.manage(FakeWindowBounds(Default::default()));
}

#[tauri::command]
pub async fn set_fake_window_bounds(
    window: Window,
    payload: SetBoundsPayload,
    state: tauri::State<'_, FakeWindowBounds>,
) -> Result<(), String> {
    println!("[FakeWindow] Attempting to set bounds for window: {}", window.label());
    println!("[FakeWindow] Name: {}, Bounds: {:?}", payload.name, payload.bounds);
    
    let mut state = state.0.write().await;
    let map = state.entry(window.label().to_string()).or_default();
    map.insert(payload.name, payload.bounds);
    
    println!("[FakeWindow] Successfully set bounds. Current bounds count: {}", map.len());
    Ok(())
}

#[cfg(target_os = "macos")]
fn get_cursor_position() -> (f64, f64) {
    if let Ok(source) = CGEventSource::new(CGEventSourceStateID::HIDSystemState) {
        if let Ok(event) = CGEvent::new(source) {
            let point = event.location();
            println!("[FakeWindow] Current cursor position: ({}, {})", point.x, point.y);
            return (point.x, point.y);
        }
    }
    println!("[FakeWindow] Failed to get cursor position, returning (0, 0)");
    (0.0, 0.0)
}

pub fn spawn_fake_window_listener(window: Window) {
    println!("[FakeWindow] Spawning fake window listener for window: {}", window.label());
    
    #[cfg(target_os = "macos")]
    unsafe {
        println!("[FakeWindow] Setting up macOS specific window properties");
        let ns_window = window.ns_window().unwrap() as *mut objc::runtime::Object;
        
        let _: () = msg_send![ns_window, setLevel: 3];
        println!("[FakeWindow] Window level set to 3");
        
        let _: () = msg_send![ns_window, setAcceptsMouseMovedEvents: YES];
        println!("[FakeWindow] Mouse moved events enabled");
        
        let _: () = msg_send![ns_window, setIgnoresMouseEvents: NO];
        println!("[FakeWindow] Mouse events enabled");
        
        let _: () = msg_send![ns_window, setStyleMask: 0];
        println!("[FakeWindow] Window style removed");
        
        let behavior: u64 = 
            (1 << 0) |
            (1 << 3) |
            (1 << 5) |
            (1 << 6) |
            (1 << 7);
        let _: () = msg_send![ns_window, setCollectionBehavior: behavior];
        println!("[FakeWindow] Window behavior set");
        
        let _: () = msg_send![ns_window, setMovable: NO];
        let _: () = msg_send![ns_window, setHidesOnDeactivate: NO];
        let _: () = msg_send![ns_window, setOpaque: NO];
        let _: () = msg_send![ns_window, setHasShadow: NO];
        
        println!("[FakeWindow] Window properties set successfully");
    }

    let window_clone = window.clone();
    let app_handle = window.app_handle();

    println!("[FakeWindow] Setting up window event listener");
    window.on_window_event(move |event| {
        match event {
            tauri::WindowEvent::Focused(focused) => {
                println!("[FakeWindow] Window focus changed: {}", focused);
                let window = window_clone.clone();
                let app_handle = app_handle.clone();
                
                spawn(async move {
                    let state = app_handle.state::<FakeWindowBounds>();
                    let map = state.0.read().await;
                    
                    if let Some(windows) = map.get(window.label()) {
                        println!("[FakeWindow] Found {} registered bounds for window", windows.len());
                        
                        #[cfg(target_os = "macos")]
                        let (cursor_x, cursor_y) = get_cursor_position();
                        
                        if let Ok(window_position) = window.outer_position() {
                            println!("[FakeWindow] Window position: {:?}", window_position);
                            let mut ignore = true;
                            
                            for (name, bounds) in windows {
                                #[cfg(target_os = "macos")]
                                {
                                    let x_min = window_position.x as f64 + bounds.x;
                                    let x_max = window_position.x as f64 + bounds.x + bounds.width;
                                    let y_min = window_position.y as f64 + bounds.y;
                                    let y_max = window_position.y as f64 + bounds.y + bounds.height;
                                    
                                    println!("[FakeWindow] Checking bounds '{}': x({} to {}), y({} to {})", 
                                        name, x_min, x_max, y_min, y_max);
                                    
                                    if cursor_x >= x_min && cursor_x <= x_max && cursor_y >= y_min && cursor_y <= y_max {
                                        ignore = false;
                                        println!("[FakeWindow] Cursor is inside bounds '{}'!", name);
                                        break;
                                    }
                                }
                            }
                            
                            println!("[FakeWindow] Setting ignore_cursor_events to: {}", ignore);
                            let _ = window.set_ignore_cursor_events(ignore);
                        }
                    } else {
                        println!("[FakeWindow] No bounds registered for window {}", window.label());
                    }
                });
            }
            _ => {
                println!("[FakeWindow] Other window event: {:?}", event);
            }
        }
    });
    println!("[FakeWindow] Window event listener setup complete");
}