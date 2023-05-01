// main.js

const { app, BrowserWindow } = require('electron')
const path = require('path')

// 建立應用程式視窗的 function
function createWindow() {
  // 應用程式視窗設定
  const mainWindow = new BrowserWindow({
    width: 380,
    height: 370,
    autoHideMenuBar:true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  mainWindow.setAlwaysOnTop(true, 'screen');

  // 載入 index.html，亦可載入某個網址
  mainWindow.loadFile('index.html')
  // 打開開發者模式
  // mainWindow.webContents.openDevTools()
}

// 完成初始化後執行此方法
app.whenReady().then(() => {
  app.allowRendererProcessReuse = false
  createWindow()

  // 運用程式運行時，點擊工具列圖示時觸發（macOS）
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 關閉所有視窗時觸發，除 macOS 以外
app.on('window-all-closed', function () {
  // darwin 為 macOS 的作業系統
  if (process.platform !== 'darwin') app.quit()
})