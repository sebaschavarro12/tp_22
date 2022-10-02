input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    border_led()
})
function border_led () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(4, 4)
    led.plot(3, 4)
    led.plot(2, 4)
    led.plot(1, 4)
    led.plot(0, 4)
    led.plot(0, 3)
    led.plot(0, 2)
    led.plot(0, 1)
}
function cross_led () {
    led.plot(1, 2)
    led.plot(2, 1)
    led.plot(3, 2)
    led.plot(2, 3)
    led.plot(2, 2)
}
input.onButtonPressed(Button.AB, function () {
    border_led()
    cross_led()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cross_led()
})
