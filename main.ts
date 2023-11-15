input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.LoopingInBackground)
})
input.onGesture(Gesture.LogoUp, function () {
    music.setTempo(250)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Giraffe)
    music.play(music.stringPlayable("D E G F C5 E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    music.setTempo(90)
})
