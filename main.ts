radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        radio.sendNumber(15)
    } else if (receivedNumber == 2) {
        radio.sendNumber(25)
    } else if (receivedNumber == 3) {
        radio.sendNumber(63)
    } else {
        radio.sendNumber(80)
    }
})
radio.setGroup(13)
