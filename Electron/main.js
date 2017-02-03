'use strict';
const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let willQuitApp = false;
let notificationSystem;
let mainWindow;
let notifications = 0;
// let tray;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    minWidth: 320,
    minHeight: 480,
    title: "Parity UI",
    frame: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('close', (e) => {
    if (willQuitApp) {
      /* the user tried to quit the app */
      mainWindow = null;
    } else {
      /* the user only tried to close the window */
      e.preventDefault();
      mainWindow.hide();
    }
  });
}

/* Begin App */
app.on('ready', createWindow);

/* 'activate' is emitted when the user clicks the Dock icon (OS X) */
app.on('activate', () => mainWindow.show());

/* 'before-quit' is emitted when Electron receives
 * the signal to exit and wants to start closing windows */
app.on('before-quit', () => willQuitApp = true);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('focus', () => {
  onFocus();
});


/* IPC Events */

ipcMain.on('focus', function (e) {
  if (!mainWindow.isVisible())
    mainWindow.show();
  mainWindow.focus();
});

ipcMain.on('hide', function(e) {
  mainWindow.hide();
});

ipcMain.on('incrBadge', function (e) {
  incrBadge();
});

ipcMain.on('setProgress', function (e, progress) {
  setProgress(progress);
});

// When work makes progress, show the progress bar
function setProgress (progress) {
  // Use values 0 to 1, or -1 to hide the progress bar
  mainWindow.setProgressBar(progress || -1); // Progress bar works on all platforms
}

// When work completes while the app is in the background, show a badge
function incrBadge() {
  if (!dock || mainWindow.isFocused()) return;
  notifications++;
  app.setBadgeCount(notifications);
}

// Subscribe to the window focus event. When that happens, hide the badge
function onFocus () {
  notifications = 0;
  app.setBadgeCount(notifications);
}
