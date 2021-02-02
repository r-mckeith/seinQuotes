// global variables
let jerryUrl = 'https://img.discogs.com/IT2ANZAn8zJIhQ_pV8qTyElA9zc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-558436-1478198229-3737.jpeg.jpg'
let elaineUrl = 'https://3.bp.blogspot.com/_JI1Ciz-JrcA/TS_JOAoyLmI/AAAAAAAAAFU/Uw74X-pIQGk/s1600/elaine.png'
let georgeUrl = 'https://pbs.twimg.com/profile_images/2183616592/george-costanza1_400x400.jpg'
let kramerUrl = 'https://i.pinimg.com/originals/ac/60/98/ac609817e640c5ad582f0baf35d1634c.jpg'
let seinfeldUrl = 'https://seinfeld-quotes.herokuapp.com/random'
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

// event listeners
b.style.display = 'flex'
b.addEventListener('click', (e) => {
  e.preventDefault()
  getStarted()
})

jerry.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswer()
})

elaine.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswer()
})

george.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswer()
})

kramer.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswer()
})

// named functions
function initialState() {
  p.innerText = ""
  d.innerText = "See if you can beat the high score. Press start now!"
  jerry.setAttribute('src', "")
  elaine.setAttribute('src', "")
  george.setAttribute('src', "")
  kramer.setAttribute('src', "")
}

function getStarted() {
  b.style.display = 'none'
  d.innerText = ""
  jerry.setAttribute('src', jerryUrl)
  elaine.setAttribute('src', elaineUrl)
  george.setAttribute('src', georgeUrl)
  kramer.setAttribute('src', kramerUrl)
  getQuote()
}

function getQuote() {
  fetch(seinfeldUrl)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      quotes = data
      console.log(quotes.author)
      p.innerText = quotes.quote
    })
    .catch((error) => {
      console.error("ERROR ".error)
      return quotes.author
    })
}

function checkAnswer() {
  if (answer === quotes.author.toLowerCase()) {
    youreRight()
  } else {
    youreWrong()
  }
}

function youreRight() {
  getQuote()
  score ++
  s.innerText = score
}

function youreWrong() {
  alert("Better luck next time!")
  initialState()
  b.style.display = 'flex'
  score = 0
  s.innerText = score
}

function getHighScore() {
  if (score > highscore){
    console.log("You won!")
  }else{
    console.log("You lost")
  }
}


// // darkmode 
// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]');

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       document.querySelector('body').style.backgroundColor = "black";
//       document.querySelector('p').style.color = "white";
//       document.getElementById('directions').style.color = "white";
//     } else {
//       document.querySelector('body').style.backgroundColor = "rgb(49, 115, 193)";
//       document.querySelector('p').style.color = "black";
//       document.querySelector('d').style.color = "black";
//     }
//   });
// });
