#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod fake_window;
use fake_window::set_fake_window_bounds;

use tauri::{AppHandle, LogicalPosition, Manager, Window, Wry};
use tauri_nspanel::ManagerExt;

fn main() {
  tauri::Builder::default()
      .plugin(tauri_nspanel::init())
      .invoke_handler(tauri::generate_handler![
          show_panel,
          hide_panel,
          close_panel,
          set_fake_window_bounds
      ])
      .setup(|app| {
          fake_window::init(&app.handle());
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
  fake_window::spawn_fake_window_listener(window.clone());
  println!("Window initialization complete.");
}

fn set_window_position(window: &Window<Wry>) {
  if let Some(monitor) = window.current_monitor().unwrap() {
      let screen_size = monitor.size();
      let scale_factor = monitor.scale_factor();

      let window_width = 400.0;
      let window_height = 200.0;
      let dock_height = 80.0;

      let screen_width = screen_size.width as f64 / scale_factor;
      let screen_height = screen_size.height as f64 / scale_factor;

      let position_x = (screen_width - window_width) / 2.0;
      let position_y = screen_height - dock_height - window_height;

      window
          .set_position(LogicalPosition {
              x: position_x.max(0.0),
              y: position_y.max(0.0),
          })
          .expect("Failed to set window position");

      window.show().expect("Failed to show window");
  }
}

#[tauri::command]
fn show_panel(handle: AppHandle<Wry>) {
  if let Ok(panel) = handle.get_panel("main") {
      panel.show();
  }
}

#[tauri::command]
fn hide_panel(handle: AppHandle<Wry>) {
  if let Ok(panel) = handle.get_panel("main") {
      panel.order_out(None);
  }
}

#[tauri::command]
fn close_panel(handle: AppHandle<Wry>) {
  if let Ok(panel) = handle.get_panel("main") {
      panel.released_when_closed(true);
      panel.close();
  }
}