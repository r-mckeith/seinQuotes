// let button = document.getElementById('button')
// button.addEventListener('click', function(e) {
//   fetch('https://seinfeld-quotes.herokuapp.com/random') 
//   .then(function(data) { 
//     return data.json() 
//   })
//   .then(function(json) {
//     posts = json
//     let p = document.getElementById('quote')
//     p.innerText = posts.quote 
//     document.getElementById('buttons').addEventListener('click', function(e) {
//         if (e.target.value === posts.author){
//           console.log("You're right")
//         } else {
//           console.log("You're wrong!")
//         } 
//   }) 
//   .catch((error) => {
//     console.error("ERROR ". error)
//   })
// })
// }