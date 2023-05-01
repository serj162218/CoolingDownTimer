# myClock
## Intro
Using to record the cooling time in Game.
If it's not working, please open the .exe as admin.

## Usage
Create a config.json under the directory as same as .exe.
The format is like below. Set "rawcode" option to true will display the keypress's id on the application.
```json
{
    "rawcode":false,
    "clock": [
        {
            "time": "60",
            "intro": "Clock 1",
            "click": 97
        },
        {
            "time": "25",
            "intro": "Clock 2",
            "click": 98
        }
    ]
}
```