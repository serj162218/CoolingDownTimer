# MeowCounterTool
## Intro
Using coolingdown / counter / stopwatch when not focus on this window.
If it's not working, please open the .exe as admin.

## Usage
Create a config.json under the directory as same as .exe.
The format is like below. Set "rawcode" option to true will display the keypress's id on the application.
Type 1 = timer, 2 = stopwatch, 3 = counter

### Stopwatch:
    Click again while using stopwatch, so it's title will turn green and stop ticking.
    use reset button to reset the timer.
### Counter
    Click again with counter to count.
    use reset button to reset the counter.
```json
{
    "rawcode":false,
    "clock": [
        {
            "type": 1,
            "time": "60",
            "intro": "Timer",
            "click": 97
        },
        {
            "type": 2,
            "time": "25",
            "intro": "Stopwatch",
            "click": 98
        },
        {
            "type": 3,
            "time": "25",
            "intro": "Counter",
            "click": 98
        }
    ]
}
```