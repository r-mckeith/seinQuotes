// global variables
let seinfeldUrl = 'https://seinfeld-quotes.herokuapp.com/random'
let logoUrl = 'https://cdn.freebiesupply.com/logos/large/2x/seinfeld-logo-png-transparent.png'
let friendsLogoUrl = 'https://cdn.shopify.com/s/files/1/0333/0480/5511/products/Friends-05_1476x.jpg?v=1588975211'
let gifUrl = "https://api.giphy.com/v1/gifs/random?api_key=GY4FWR18NjpgkpcFzW3UXE16pMCKneaL&tag=seinfeld&rating=g"
let answer = ""
let score = 0
let highscore = 5

// element selection
let b = document.getElementById('start')
let jerry = document.getElementById('jerry')
let elaine = document.getElementById('elaine')
let george = document.getElementById('george')
let kramer = document.getElementById('kramer')
let p = document.getElementById('quote')
let d = document.getElementById('directions')
let s = document.getElementById('current-score')
let body = document.querySelector('body')
let scorebox = document.getElementById('score')
let highscorebox = document.getElementById('highscore')
let highscoreh2 = document.getElementById('highscoreh2')
let scores = document.getElementById('scores')
let logo = document.getElementById('logo')
let b2 = document.getElementById('start2')
let footer = document.getElementById('footer')
let gif = document.getElementById('gif')
let buttons = document.querySelector('.buttons')
let buttonsf = document.querySelector('.buttons-friends')
let tryAgain = document.getElementById('try-again')

// event listeners
b.addEventListener('click', (e) => {
  e.preventDefault()
  getStarted()
})

tryAgain.addEventListener('click', (e) => {
  e.preventDefault()
  getStarted()
})

let seinfeldGang = [jerry, elaine, george, kramer]

for (let i = 0; i < seinfeldGang.length; i++) {
  seinfeldGang[i].addEventListener('click', function (e) {
    answer = e.target.id
    checkAnswer()
  })
}

// named functions
function initialState() {
  p.innerText = ""
  score = 0
  s.innerText = score
  tryAgain.style.display = 'flex'
  buttons.style.display = 'none'
}

function getStarted() {
  b.style.display = 'none'
  tryAgain.style.display = 'none'
  d.innerText = ""
  buttons.style.display = 'flex'
  gif.style.display = 'none'
  getQuote()
}

function getQuote() {
  fetch(seinfeldUrl)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      quotes = data
      console.log(quotes.quote)
      filterQuote(quotes.author, quotes.quote)
    })
    .catch((error) => {
      console.error("ERROR ".error)
      return quotes.author
    })
}

function filterQuote(author, quote) {
  if (author === "Jerry" || author === "Elaine" || author === "George" || author === "Kramer") {
    p.innerText = quote
  } else {
    getQuote()
  }
}

function checkAnswer() {
  if (answer === quotes.author.toLowerCase()) {
    getQuote()
    score++
    s.innerText = score
  } else {
    getGif()
    initialState()
  }
}

function getGif() {
    fetch(gifUrl) 
      .then(function (data) {
        return data.json()
      })
      .then(function (data) {
        giphy = data
        gif.style.display = 'flex'
        gif.setAttribute('src', giphy.data.fixed_height_downsampled_url)
      })
      .catch((error) => {
        console.error("ERROR ".error)
        return quotes.author
      })
  }

// friends mode 
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]')

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      body.style.backgroundColor = 'rgb(255 255 255)'
      logo.setAttribute('src', friendsLogoUrl)
      highscoreh2.innerText = "Lindsey: 27"
      p.innerText=""
      d.innerText = ""
      b.style.display = 'none'
      buttons.style.display = 'none'
      gif.style.display = 'none'
      tryAgain.style.display = 'none'
      getStartedFriends()
    } else {
      b.style.display = 'flex'
      b2.style.display = 'none'
      body.style.backgroundColor = "rgb(49, 115, 193)"
      logo.setAttribute('src', logoUrl)
      highscoreh2.innerText = "Ryan: 50"
      score = 0
      s.innerText = score
      p.innerText = ""
      d.innerText = "See if you can beat the high score. Press start now!"
      buttonsf.style.display = 'none'
    }
  }) 
})

// // global variables
let friendsUrl = 'https://friends-quotes-api.herokuapp.com/quotes/random'

// // element selectors
let phoebe = document.getElementById('phoebe')
let chandler = document.getElementById('chandler')
let rachel = document.getElementById('rachel')
let ross = document.getElementById('ross')
let monica = document.getElementById('monica')
let joey = document.getElementById('joey')

// event listeners
b2.addEventListener('click', (e) => {
  e.preventDefault()
  getStartedFriends()
})

let friendsGang = [phoebe, chandler, rachel, ross, monica, joey]

for (let i=0; i < friendsGang.length; i++) {
  friendsGang[i].addEventListener('click', function (e) {
    answer = e.target.id
    checkAnswerFriends()
  })
}

// // named functions
function initialStateFriends() {
  b2.style.display = 'flex'
  p.innerText = ""
  score = 0
  s.innerText = score
  d.innerText = "See if you can beat the high score. Press start now!"
  buttonsf.style.display = 'none'
}

function getStartedFriends() {
  b2.style.display = 'none'
  d.innerText = ""
  buttonsf.style.display = 'flex'
  getQuoteFriends()
}

function getQuoteFriends() {
  fetch(friendsUrl)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      quotes = data
      console.log(quotes.character)
      p.innerText = quotes.quote
    })
    .catch((error) => {
      console.error("ERROR ".error)
      return quotes.author
    })
}

function checkAnswerFriends() {
  if (answer === quotes.character.toLowerCase()) {
    getQuoteFriends()
    score++
    s.innerText = score
  } else {
    alert("Better luck next time!")
    initialStateFriends()
  }
}

// darkmode 
// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]')

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       body.style.backgroundColor = "black"
//       scorebox.style.color = 'white'
//       scorebox.style.border = '1px solid white'
//       highscorebox.style.color = 'white'
//       highscorebox.style.border = '1px solid white'
//       footer.style.color = 'white'
//       footer.style.borderTop = '3px solid white'
//       p.style.color = "white"
//       d.style.color = "white"
//     } else {
//       body.style.backgroundColor = "rgb(49, 115, 193)"
//       scorebox.style.color = 'black'
//       scorebox.style.border = '1px solid black'
//       highscorebox.style.color = 'black'
//       highscorebox.style.border = '1px solid black'
//       footer.style.color = 'black'
//       footer.style.borderTop = '3px solid black'
//       p.style.color = "black"
//       d.style.color = "black"
//     }
//   })
// })





