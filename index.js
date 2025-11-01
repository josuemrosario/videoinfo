const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (err, path) => {
  //responde ao WebApp
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log("duracao do video", metadata.format.duration);
  });
});
