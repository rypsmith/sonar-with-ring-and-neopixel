let strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
let sonar2 = sonar.ping(
DigitalPin.P0,
DigitalPin.P1,
PingUnit.Centimeters
)
music.setVolume(50)
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    strip.showBarGraph(sonar2, 40)
    led.plotBarGraph(
    sonar2,
    40
    )
    if (sonar2 < 5) {
        music.ringTone(262)
    } else if (sonar2 < 10) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Sixteenth))
    } else if (sonar2 < 15) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
    } else if (sonar2 < 20) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
    } else if (sonar2 < 25) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (sonar2 < 30) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else {
        music.stopAllSounds()
    }
})
