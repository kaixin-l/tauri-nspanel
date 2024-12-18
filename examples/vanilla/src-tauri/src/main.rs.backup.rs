#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{AppHandle, Manager, Window, Wry, LogicalPosition};
use tauri_nspanel::{panel_delegate, ManagerExt, WindowExt};
use cocoa::appkit::NSWindowCollectionBehavior;
use cocoa::base::{id, YES, NO};
use objc::{msg_send, sel, sel_impl, class, runtime::Class};

fn main() {
  tauri::Builder::default()
    .plugin(tauri_nspanel::init())
    .invoke_handler(tauri::generate_handler![
      show_panel,
      hide_panel,
      close_panel
    ])
    .setup(|app| {
      let window = app.handle().get_window("main").unwrap();
      init(&window);
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

fn init(window: &Window<Wry>) {
  println!("Initializing window...");
  set_window_position(window);

  // Enable hover events without focus
  set_ignore_mouse_events(window);

  let panel = window.to_panel().unwrap();

  let delegate = panel_delegate!(MyPanelDelegate {
      window_did_become_key,
      window_did_resign_key
  });

  let handle = window.app_handle();
  delegate.set_listener(Box::new(move |delegate_name: String| {
      match delegate_name.as_str() {
          "window_did_become_key" => {
              let app_name = handle.package_info().name.to_owned();
              println!("[info]: {:?} panel becomes key window!", app_name);
          }
          "window_did_resign_key" => {
              println!("[info]: panel resigned from key window!");
          }
          _ => (),
      }
  }));

  panel.set_delegate(delegate);
  println!("Window initialization complete.");
}

/// Adjust window position to align above the Dock
fn set_window_position(window: &Window<Wry>) {
  if let Some(monitor) = window.current_monitor().unwrap() {
      let screen_size = monitor.size(); // Get physical screen dimensions
      let scale_factor = monitor.scale_factor(); // Get scale factor for Retina displays

      let window_width = 400.0;         // Window width
      let window_height = 200.0;        // Window height
      let dock_height = 80.0;           // Approximate Dock height

      // Convert screen dimensions to logical resolution
      let screen_width = screen_size.width as f64 / scale_factor;
      let screen_height = screen_size.height as f64 / scale_factor;

      // Calculate position: center horizontally and align above the Dock
      let position_x = (screen_width - window_width) / 2.0; // Horizontal center
      let position_y = screen_height - dock_height - window_height; // Above Dock

      // Print calculated position for debugging
      println!(
          "Screen scale factor: {}, logical width: {}, height: {}",
          scale_factor, screen_width, screen_height
      );
      println!(
          "Setting window position: x = {}, y = {}",
          position_x, position_y
      );

      // Set the window position
      window
          .set_position(LogicalPosition {
              x: position_x.max(0.0), // Ensure X is within bounds
              y: position_y.max(0.0), // Ensure Y is within bounds
          })
          .expect("Failed to set window position");

      // Explicitly show the window
      window.show().expect("Failed to show window");
  } else {
      println!("Failed to get current monitor information.");
  }
}

/// Enable hover events for the window without activating it
fn set_ignore_mouse_events(window: &tauri::Window<Wry>) {
  unsafe {
      // Get the native NSWindow object
      let ns_window = window.ns_window().unwrap() as *mut objc::runtime::Object;
      
      let _: () = msg_send![ns_window, setAcceptsMouseMovedEvents: true];
      let _: () = msg_send![ns_window, setIgnoresMouseEvents: false];
      
      let _: () = msg_send![ns_window, setLevel: 3];
      
      let style_mask: u64 = 0;  // NSWindowStyleMaskBorderless
      let _: () = msg_send![ns_window, setStyleMask: style_mask];

      let _: () = msg_send![ns_window, setTitlebarAppearsTransparent: true];
      let _: () = msg_send![ns_window, setTitleVisibility: 1];  // NSWindowTitleHidden
      
      let behavior: u64 = (1 << 5) | (1 << 6) | (1 << 7) | (1 << 4);
      let _: () = msg_send![ns_window, setCollectionBehavior: behavior];
        
      let _: () = msg_send![ns_window, setMovable: false];
        
      let _: () = msg_send![ns_window, setHidesOnDeactivate: false];
  }
}

#[tauri::command]
fn show_panel(handle: AppHandle<Wry>) {
  let panel = handle.get_panel("main").unwrap();
  panel.show();
}

#[tauri::command]
fn hide_panel(handle: AppHandle<Wry>) {
  let panel = handle.get_panel("main").unwrap();
  panel.order_out(None);
}

#[tauri::command]
fn close_panel(handle: AppHandle<Wry>) {
  let panel = handle.get_panel("main").unwrap();
  panel.released_when_closed(true);
  panel.close();
}