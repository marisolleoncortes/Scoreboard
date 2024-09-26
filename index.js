
let timerHome = document.getElementById("timer-home")
let timerGuest = document.getElementById("timer-guest")
let count = 0

function home1() {
    count += 1
    timerHome.textContent = count
}

function home2() {
    count += 2
    timerHome.textContent = count
}

function home3() {
    count += 3
    timerHome.textContent = count
}

function guest1() {
    count += 1
    timerGuest.textContent = count
}

function guest2() {
    count += 2
    timerGuest.textContent = count
}

function guest3() {
    count += 3
    timerGuest.textContent = count
}