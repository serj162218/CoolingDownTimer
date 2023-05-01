let fs = nodeRequire('fs'); //Load the File System to execute our common tasks (CRUD)

fs.readFile("config.json", (error, data) => {
    console.log(JSON.parse(data.toString()));
    let arr = JSON.parse(data.toString());
    if(arr['rawcode']){
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