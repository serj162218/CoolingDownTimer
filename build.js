const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname),

    win: ['nsis', 'portable'],
    config: {
        "appId": "com.serj162218.electron.CoolingDownTimer",
        "productName": "CoolingDownTimer",
        "directories": {
            "output": "build/win"
        },
        "win": {
            "icon": path.resolve(__dirname, 'icon'),
        }
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );