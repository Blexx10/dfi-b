let Pièce = 0
servos.P0.setAngle(150)
servos.P0.setRange(10, 170)
basic.forever(function () {
    if (Pièce == 0) {
        servos.P0.setAngle(150)
    } else {
        servos.P0.setAngle(60)
        basic.pause(2000)
        servos.P0.setAngle(150)
        Pièce = 0
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        Pièce = 1
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
