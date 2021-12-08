Pièce = 0
servos.P0.set_angle(150)
servos.P0.set_range(10, 170)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    if Pièce == 0:
        servos.P0.set_angle(150)
    else:
        servos.P0.set_angle(60)
        basic.pause(2000)
        servos.P0.set_angle(150)
basic.forever(on_forever2)
