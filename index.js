let homeScore = document.getElementById("home")

let point = 0
homeScore.innerText = point

function homePlusOne() {
    point += 1
    homeScore.innerText = point
    console.log(homeScore)
}

function homePlusTwo() {
    point += 2
    homeScore.innerText = point
    console.log(homeScore)
}

function homePlusThree() {
    point += 3
    homeScore.innerText = point
    console.log(homeScore)
}

let guestScore = document.getElementById("guest")

let sum = 0
guestScore.innerText = sum

function guestPlusOne() {
    sum += 1
    guestScore.innerText = sum
    console.log(guestScore)
}

function guestPlusTwo() {
    sum += 2
    guestScore.innerText = sum
    console.log(guestScore)
}

function guestPlusThree() {
    sum += 3
    guestScore.innerText = sum
    console.log(guestScore)
}

function reset() {
    homeScore.innerText = 0
    guestScore.innerText = 0
    point = 0
    sum = 0  
}