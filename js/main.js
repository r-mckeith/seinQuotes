// global variables
let jerryUrl = 'https://img.discogs.com/IT2ANZAn8zJIhQ_pV8qTyElA9zc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-558436-1478198229-3737.jpeg.jpg'
let elaineUrl = 'https://3.bp.blogspot.com/_JI1Ciz-JrcA/TS_JOAoyLmI/AAAAAAAAAFU/Uw74X-pIQGk/s1600/elaine.png'
let georgeUrl = 'https://pbs.twimg.com/profile_images/2183616592/george-costanza1_400x400.jpg'
let kramerUrl = 'https://i.pinimg.com/originals/ac/60/98/ac609817e640c5ad582f0baf35d1634c.jpg'
let seinfeldUrl = 'https://seinfeld-quotes.herokuapp.com/random'
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

// function getQuote() {
//   fetch(seinfeldUrl)
//     .then(function (data) {
//       return data.json()
//     })
//     .then(function (data) {
//       quotes = data
//       console.log(quotes.author)
//       p.innerText = quotes.quote
//     })
//     .catch((error) => {
//       console.error("ERROR ".error)
//       return quotes.author
//     })
// }

function getQuote() {
  fetch(seinfeldUrl)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      quotes = data
      checkQuote(quotes.author, quotes.quote)
    })
    .catch((error) => {
      console.error("ERROR ".error)
      return quotes.author
    })
}

function checkQuote(author, quote) {
  if (author === "Jerry" || author === "Elaine" || author === "George" || author === "Kramer") {
    p.innerText = quote
    console.log(author)
    // checkAnswer()
  } else {
    console.log("Too many authors")
    getQuote()
  }
}

function checkAnswer() {
  if (answer === quotes.author.toLowerCase()) {
    getQuote()
    score++
    s.innerText = score
  } else {
    // getGif()
    alert("Better luck next time!")
    initialState()
    b.style.display = 'flex'
    score = 0
    s.innerText = score
    p.innerText = ""
  }
}

// function getGif() {
//     fetch(gifUrl) 
//       .then(function (data) {
//         return data.json()
//       })
//       .then(function (data) {
//         giphy = data
//         gif.setAttribute('src', giphy.data.embed_url)
//         console.log(giphy.data)
//       })
//       .catch((error) => {
//         console.error("ERROR ".error)
//         return quotes.author
//       })
//   }

// friends mode
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]')

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // body.style.backgroundImage = "url('https://i.pinimg.com/originals/ca/41/93/ca419365d8f738b1bf58b97ff6df39a1.jpg')"
      // body.style.backgroundColor = 'black'
      body.style.backgroundColor = 'white'
      // logo.style.display = 'none'
      scorebox.style.color = 'white'
      scorebox.style.border = '1px solid white'
      highscorebox.style.color = 'white'
      highscorebox.style.border = '1px solid white'
      highscoreh2.innerText = "Lindsey: 27"
      p.style.color = "white"
      p.innerText=""
      d.style.color = "white"
      b.style.display = 'none'
      footer.style.color = 'white'
      footer.style.borderTop = '3px solid white'
      jerry.setAttribute('src', "")
      elaine.setAttribute('src', "")
      george.setAttribute('src', "")
      kramer.setAttribute('src', "")
      getStartedFriends()
    } else {
      b.style.display = 'flex'
      b2.style.display = 'none'
      body.style.backgroundImage = ""
      body.style.backgroundColor = "rgb(49, 115, 193)"
      logo.style.display = 'flex'
      highscoreh2.innerText = "Ryan: 50"
      p.innerText = ""
      d.innerText = "See if you can beat the high score. Press start now!"
      d.style.color = 'black'
      scorebox.style.color = 'black'
      scorebox.style.border = '1px solid black'
      scorebox.style.borderRadius = '25px'
      highscorebox.style.color = 'black'
      highscorebox.style.border = '1px solid black'
      highscorebox.style.borderRadius = '25px'
      footer.style.color = 'black'
      footer.style.borderTop = '3px solid black'
      phoebe.setAttribute('src', "")
      chandler.setAttribute('src', "")
      rachel.setAttribute('src', "")
      ross.setAttribute('src', "")
      monica.setAttribute('src', "")
      joey.setAttribute('src', "")
    }
  })
})

// // global variables
let phoebeUrl = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lisa-kudrow-friends-phoebe-buffay-1546435984.jpg?crop=1xw:0.8166666666666667xh;center,top&resize=480:*'
let chandlerUrl = 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-friends-matthew-perry.jpg'
let rachelUrl = 'https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg'
let rossUrl = 'https://pyxis.nymag.com/v1/imgs/672/4c7/a13ab0142b7e3f7b3a8994c20c2b0256a5-24-ross-friends.rsquare.w700.jpg'
let monicaUrl = 'https://i.pinimg.com/736x/ce/72/09/ce720980b962f81e9849bd65c1f5dd8a.jpg'
let joeyUrl = 'https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg'
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

phoebe.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

chandler.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

rachel.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

ross.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

monica.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

joey.addEventListener('click', function (e) {
  answer = e.target.id
  checkAnswerFriends()
})

// // named functions
function initialStateFriends() {
  b2.style.display = 'flex'
  phoebe.setAttribute('src', "")
  chandler.setAttribute('src', "")
  rachel.setAttribute('src', "")
  ross.setAttribute('src', "")
  monica.setAttribute('src', "")
  joey.setAttribute('src', "")
}

function getStartedFriends() {
  b2.style.display = 'none'
  d.innerText = ""
  phoebe.setAttribute('src', phoebeUrl)
  chandler.setAttribute('src', chandlerUrl)
  rachel.setAttribute('src', rachelUrl)
  ross.setAttribute('src', rossUrl)
  monica.setAttribute('src', monicaUrl)
  joey.setAttribute('src', joeyUrl)
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
    p.innerText = ""
    initialStateFriends()
    score = 0
    s.innerText = score
  }
}

// // darkmode 
// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]')

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       body.style.backgroundColor = "black"
//       scorebox.style.color = 'white'
//       scorebox.style.border = '1px solid white'
//       highscorebox.style.color = 'white'
//       highscorebox.style.border = '1px solid white'
//       p.style.color = "white"
//       d.style.color = "white"
//     } else {
//       body.style.backgroundColor = "rgb(49, 115, 193)"
//       body.style.backgroundImage = "url('')"
//       p.style.color = "black"
//       d.style.color = "black"
//     }
//   })
// })





