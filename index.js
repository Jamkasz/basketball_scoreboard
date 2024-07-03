let homeScore = 0
let guestScore = 0
const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
const home1Btn = document.getElementById("home-1-btn")
const home2Btn = document.getElementById("home-2-btn")
const home3Btn = document.getElementById("home-3-btn")
const guest1Btn = document.getElementById("guest-1-btn")
const guest2Btn = document.getElementById("guest-2-btn")
const guest3Btn = document.getElementById("guest-3-btn")
const resetBtn = document.getElementById("reset-btn")
const homeScoreBoxEl = document.getElementById("home-score-box")
const guestScoreBoxEl = document.getElementById("guest-score-box")

function addHome(amount) {
    homeScore += amount
    homeScoreEl.textContent = homeScore
    updateLeader()
}

function addGuest(amount) {
    guestScore += amount
    guestScoreEl.textContent = guestScore
    updateLeader()
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    updateLeader()
}

function updateLeader() {
    if (homeScore > guestScore) {
        homeScoreBoxEl.classList.add("highlighted")
        guestScoreBoxEl.classList.remove("highlighted")
    }
    else if (guestScore > homeScore) {
        guestScoreBoxEl.classList.add("highlighted")
        homeScoreBoxEl.classList.remove("highlighted")
    }
    else {
        homeScoreBoxEl.classList.remove("highlighted")
        guestScoreBoxEl.classList.remove("highlighted")
    }
}

home1Btn.addEventListener("click", () => {
    addHome(1)
})

home2Btn.addEventListener("click", () => {
    addHome(2)
})

home3Btn.addEventListener("click", () => {
    addHome(3)
})

guest1Btn.addEventListener("click", () => {
    addGuest(1)
})

guest2Btn.addEventListener("click", () => {
    addGuest(2)
})

guest3Btn.addEventListener("click", () => {
    addGuest(3)
})

resetBtn.addEventListener("click", reset)