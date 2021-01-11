input.onButtonPressed(Button.A, function () {
    music.playMelody("C D C D E E E G ", 120)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
	
})
