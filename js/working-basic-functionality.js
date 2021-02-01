// let button = document.getElementById('start')
// button.addEventListener('click', function(e) {
//   let d = document.getElementById('directions')
//   d.innerText = ""
//   document.getElementById('jerry').setAttribute('src', jerryUrl)
//   document.getElementById('elaine').setAttribute('src', elaineUrl)
//   document.getElementById('george').setAttribute('src', georgeUrl)
//   document.getElementById('kramer').setAttribute('src', kramerUrl)


//   fetch('https://seinfeld-quotes.herokuapp.com/random') 
//   .then(function(data) { 
//     return data.json() 
//   }) 
//   .then(function(json) {
//     posts = json
//     getQuote()
//   }) 
//   .catch((error) => {
//     console.error("ERROR ". error)
//   })
// })

// function getQuote() {
//   let p = document.getElementById('quote')
//   p.innerText = posts.quote 
//   console.log(posts)
//   checkAnswer()
// }

// function checkAnswer() {
//   document.getElementById('buttons').addEventListener('click', function(e) {
//     if (e.target.id === posts.author.toLowerCase()){
//       youreRight()
//     } else {
//       youreWrong()
//     }
//   })
// }


// function youreRight() {
//   alert("You're right!")
// }

// function youreWrong () {
//   alert("You're wrong!")
// }

// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]');

//   checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//       document.querySelector('body').style.backgroundColor = "black";
//       document.querySelector('p').style.color = "white";
//     } else {
//       // do that
//       document.querySelector('body').style.backgroundColor = "rgb(49, 115, 193)";
//       document.querySelector('p').style.color = "black";
//     }
//   });
// });

// let jerryUrl = 'https://img.discogs.com/IT2ANZAn8zJIhQ_pV8qTyElA9zc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-558436-1478198229-3737.jpeg.jpg'
// let elaineUrl = 'https://3.bp.blogspot.com/_JI1Ciz-JrcA/TS_JOAoyLmI/AAAAAAAAAFU/Uw74X-pIQGk/s1600/elaine.png'
// let georgeUrl = 'https://pbs.twimg.com/profile_images/2183616592/george-costanza1_400x400.jpg'
// let kramerUrl = 'https://i.pinimg.com/originals/ac/60/98/ac609817e640c5ad582f0baf35d1634c.jpg'