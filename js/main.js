// URL variables
let jerryUrl = 'https://img.discogs.com/IT2ANZAn8zJIhQ_pV8qTyElA9zc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-558436-1478198229-3737.jpeg.jpg'
let elaineUrl = 'https://3.bp.blogspot.com/_JI1Ciz-JrcA/TS_JOAoyLmI/AAAAAAAAAFU/Uw74X-pIQGk/s1600/elaine.png'
let georgeUrl = 'https://pbs.twimg.com/profile_images/2183616592/george-costanza1_400x400.jpg'
let kramerUrl = 'https://i.pinimg.com/originals/ac/60/98/ac609817e640c5ad582f0baf35d1634c.jpg'
let answer = ""

function initialState() {
  let p = document.getElementById('quote')
  p.innerText = ""
  let b = document.getElementById('start')
  b.style.display = 'flex'
  b.addEventListener('click', (e) => {
    e.preventDefault()
    getStarted()
  })
  let d = document.getElementById('directions')
  d.innerText = "See if you can beat the high score. Press start now!"
  document.getElementById('jerry').setAttribute('src', "")
  document.getElementById('elaine').setAttribute('src', "")
  document.getElementById('george').setAttribute('src', "")
  document.getElementById('kramer').setAttribute('src', "")
}
 

function getStarted() {
    let b = document.getElementById('start')
    b.style.display = 'none'
    let d = document.getElementById('directions')
    d.innerText = ""
    document.getElementById('jerry').setAttribute('src', jerryUrl)
    document.getElementById('elaine').setAttribute('src', elaineUrl)
    document.getElementById('george').setAttribute('src', georgeUrl)
    document.getElementById('kramer').setAttribute('src', kramerUrl)
    document.getElementById('jerry').addEventListener('click', function (e) {
      answer = e.target.id
      checkAnswer()
    })
    document.getElementById('elaine').addEventListener('click', function (e) {
      answer = e.target.id
      checkAnswer()
    })
    document.getElementById('george').addEventListener('click', function (e) {
      answer = e.target.id
      checkAnswer()
    })
    document.getElementById('kramer').addEventListener('click', function (e) {
      answer = e.target.id
      checkAnswer()
    })
    getQuote()
}

function getQuote() {
  fetch('https://seinfeld-quotes.herokuapp.com/random')
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      quotes = data
      console.log(quotes.author)
      let p = document.getElementById('quote')
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
    console.log("RIGHT+++++++++++++++")
  } else {
    youreWrong()
    console.log("WRONG+++++++++++++++")
  }
}


function youreRight() {
  getQuote()
}

function youreWrong() {
  initialState() 
}
initialState()

// darkmode 
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.querySelector('body').style.backgroundColor = "black";
      document.querySelector('p').style.color = "white";
      document.getElementById('directions').style.color = "white";
    } else {
      document.querySelector('body').style.backgroundColor = "rgb(49, 115, 193)";
      document.querySelector('p').style.color = "black";
      document.querySelector('d').style.color = "black";
    }
  });
});
