const { app, BrowserWindow } = require('electron')
const path=require('path');
const url=require('url');
const updater = require('./updater')
const electron = require('electron');
const service= require('./DBConnection/service')
const {shell} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win



// for exe istallation keep below two lines otherwise comment  
// let username = process.env.username || process.env.user;
// shell.openItem('dbcv.cmd');


function createWindow () {
  var electronScreen = electron.screen;
  var size = electronScreen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  win = new electron.BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
        nodeIntegration: true,
    },
});

 // load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'prod_build/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //win.loadURL('http://localhost:4200/')
  //Check for the Update
  setTimeout(updater.check,2000)

  // win.setIcon(path.join(__dirname, '/src/assets/img/vessel2.jpg'));

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}


try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  electron.app.on('ready', createWindow);
  // Quit when all windows are closed.
  electron.app.on('window-all-closed', function () {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
          electron.app.quit();
      }
  });
  electron.app.on('activate', function () {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (win === null) {
          createWindow();
      }
  });
}
catch (e) {
  // Catch Error
  // throw e;
}