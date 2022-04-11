const cors_anywhere_api = "https://quiet-plateau-64788.herokuapp.com/" // Lets me do a fetch on the url I wanna fetch
const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random/"

document.querySelector("#wow").addEventListener("click", makeWow)

function makeWow() {
  fetch(cors_anywhere_api + url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      const wow = data[0].audio
      const wowMovieAndYear = data[0].movie + " " + data[0].release_date

      document.querySelector("#wow_info").innerText = wowMovieAndYear

      let wowSound = new Audio(wow)
      wowSound.play()
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}