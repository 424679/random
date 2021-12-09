let X = 0
let Y = 0
let list: number[] = []
let N = 0
let A = 0
function 燈數 (num: number) {
    if (num / 5 == 0) {
        X = 4
        Y = Math.floor(num) - 1
    } else {
        X = num % 5 - 1
        Y = Math.floor(num / 5)
    }
    led.plot(X, Y)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    N = 0
    while (N < 3) {
        A = randint(0, 24)
        if (list[A] == 0) {
            list[A] = 1
            N += 1
            燈數(A + 1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
