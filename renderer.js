let fs = nodeRequire("fs");
const remote = nodeRequire('electron').remote
const data = remote.getGlobal('sharedObject');

fs.readFile(`${data.locate ?? "."}/config.json`, (error, data) => {
    let arr = JSON.parse(data.toString());
    if (arr['rawcode']) {
        $("#clickRowCode").css("display", "block");
    }
    arr['clock'].forEach((e) => {
        switch (e['type']) {
            case 1:
                createTimer(e);
                break;
            case 2:
                createStopWatch(e);
                break;
            case 3:
                createCounter(e);
                break;
        }
    });
})

function createTimer(e) {
    $("#main").append(`
    <div class="clock" d-type="1" d-time="${e['time']}" d-id="${e['click']}" d-intro="${e['intro']}">
        <span class="intro">${e['intro']}</span>
        <br>
        <span class="number"></span>
    </div>
    `);
}
function createStopWatch(e) {
    $("#main").append(`
    <div class="clock" d-type="2" d-id="${e['click']}" d-intro="${e['intro']}">
        <span class="intro">${e['intro']}</span><button d-id="${e['click']}" class="reset">Reset</button>
        <br>
        <span class="number">0</span>
    </div>
    `);
}

function createCounter(e) {
    $("#main").append(`
    <div class="clock" d-type="3" d-id="${e['click']}" d-intro="${e['intro']}">
        <span class="intro">${e['intro']}</span><button d-id="${e['click']}" class="reset">Reset</button>
        <br>
        <span class="number">0</span>
    </div>
    `);
}


const ioHook = nodeRequire('iohook');
ioHook.on('keydown', function (e) {
    $("#rowCode").text(e.rawcode)
    let id = e.rawcode;
    if ($(`.clock[d-id=${id}]`).length != 0) {
        let element = $(`.clock[d-id=${id}]`);
        switch (element.attr("d-type")) {
            case "1":
                startTimer(element, id);
                break;
            case "2":
                startStopWatch(element, id);
                break;
            case "3":
                startCounter(element, id);
                break;
        }
    }
});
ioHook.start();
ioHook.start(false);

let intervalObj = {};
function startTimer(element, id) {
    element.children(".intro").css("color", "black");
    element.children(".number").css("display", "block");
    let t = parseInt(element.attr("d-time"));
    element.children(".number").text(t);
    clearInterval(intervalObj[id]);
    intervalObj[id] = setInterval(function () {
        console.log(`id:${id}, t:${t}`);
        t -= 1;
        if (t <= 0) {
            clearInterval(this);
            element.children(".number").css("display", "none");
            element.children(".intro").css("color", "red");
        }
        else {
            element.children(".number").text(t);
        }
    }, 1000)
}

$("body").on("click", ".clock[d-type='2'] .reset", function () {
    let element = $(this).parent(".clock[d-type='2']");
    let id = $(element).attr("d-id");
    clearInterval(intervalObj[id]);
    intervalObj[id] = undefined;
    element.children(".number").css("display", "none");
    element.children(".intro").css("color", "red");
    element.children(".number").text("0");
})


$("body").on("click", ".clock[d-type='3'] .reset", function () {
    let element = $(this).parent(".clock[d-type='3']");
    let id = $(element).attr("d-id");

    element.children(".number").css("display", "none");
    element.children(".intro").css("color", "red");
    element.children(".number").text("0");
})

function startStopWatch(element) {
    element.children(".intro").css("color", "black");
    element.children(".number").css("display", "block");

    let t = parseInt(element.children(".number").text());
    let id = $(element).attr("d-id");

    if (intervalObj[id]) {
        console.log(intervalObj[id]);
        clearInterval(intervalObj[id]);
        intervalObj[id] = undefined;
        element.children(".intro").css("color", "green");
    } else {
        intervalObj[id] = setInterval(function () {
            console.log(`t:${t}`);
            t += 1;
            element.children(".number").text(t);
        }, 1000)
    }


}

function startCounter(element) {
    element.children(".intro").css("color", "black");
    element.children(".number").css("display", "block");
    let t = parseInt(element.children(".number").text());
    element.children(".number").text(t + 1);
}