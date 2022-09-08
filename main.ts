input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature() - 2) + "C")
    basic.showIcon(IconNames.SmallDiamond)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
})
