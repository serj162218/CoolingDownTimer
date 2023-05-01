let fs = nodeRequire("fs");
const remote = nodeRequire('electron').remote
const data = remote.getGlobal('sharedObject');

fs.readFile(`${data.locate??"."}/config.json`, (error, data) => {
    let arr = JSON.parse(data.toString());
    if (arr['rawcode']) {
        $("#clickRowCode").css("display", "block");
    }
    arr['clock'].forEach((e) => {
        $("#clock").append(`
        <div class="clockDiv" d-time="${e['time']}" d-id="${e['click']}" d-intro="${e['intro']}">
        <span class="clockIntro">${e['intro']}</span>
        <br>
        <span class="clockTickingTime"></span>
        </div>
        `)
    });
})