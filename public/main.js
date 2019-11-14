const getPicAPi = async () => {
  const response = await fetch(
    'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  )
  const img = await response.json()
  displayStuff(img.url)
}

const displayStuff = img => {
  document.querySelector('.nasaPic').src = img
}
document.addEventListener('DOMContentLoaded', getPicAPi)

//

// const PicAPI = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'

// const getPicAPI = async () => {
// const response = await fetch (picAPI)
// const img = await response.json ()
// displayStuff (img.url)

// const loadAPI = () =>{
// getPicAPI ()
// }

// document.addEventListener('DOMContentLoaded', loadAPI)
