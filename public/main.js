const picAPI = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod' //define variables for each API, to be called in functions
const launchAPI =
  'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

// let missions = []
// let currentIndex = 0
// let deadline
// let timer
const getPicAPI = async () => {
  // use picAPI variable as parameter in fetch function
  const response = await fetch(picAPI)
  // define img variable
  const img = await response.json()

  displayStuff(img.url) // img defined as JSON response

  console.log(img.url) // direct to "url"  of API
}
const copyRight = async () => {
  const response = await fetch(picAPI) //call appropriate API variable
  const picAuthor = await response.json()
  displayAttribute(picAuthor.copyright)
}
const titleOfPic = async () => {
  const response = await fetch(picAPI)
  const picTitle = await response.json()
  displayTitle(picTitle.title)
}
//Worked with Celeste on this portion, it was functioning, tried to go in and re-work it with my own understanding and struggled to get it back up.

// const getSpaceXDetails = async () => {
//   const response = await fetch(launchAPI)
//   const results = await response.json()
//   missions = results
//   getCurrentMissionDetails()
// }

// const getCurrentMissionDetails = () => {
//   document.querySelector('.vessel').textContent =
//     missions[currentIndex].mission_name

//   if (missions[currentIndex].details) {
//     document.querySelector('.launchD').textContent =
//       missions[currentIndex].details
//   } else {
//     document.querySelector('.launchD').textContent =
//       'No description available yet.'
//   }

//   countdownTimer()

//   document.querySelector('.launchS').textContent =
//     missions[currentIndex].launch_site.site_name_long
// }

// const nextMission = () => {
//   setInterval(function() {
//     if (currentIndex > missions.length - 2) {
//       currentIndex = 0
//     } else {
//       currentIndex++
//     }
//     getCurrentMissionDetails()
//   }, 10000)
// }

// const previousMission = () => {
//   if (currentIndex > 0) {
//     currentIndex--
//   } else {
//     currentIndex = missions.length - 1
//   }
//   getCurrentMissionDetails()
// }

// const countdownTimer = () => {
//   deadline = missions[currentIndex].launch_date_utc
//   const interval = setInterval(function() {
//     const total = Date.parse(deadline) - Date.parse(new Date())
//     const seconds = Math.floor((total / 1000) % 60)
//     const minutes = Math.floor((total / 1000 / 60) % 60)
//     const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
//     const days = Math.floor(total / (1000 * 60 * 60 * 24))
//     timer = {
//       total: total,
//       seconds: seconds,
//       minutes: minutes,
//       hours: hours,
//       days: days,
//     }
//     console.log(timer)
//     const clock = document.querySelector('.launchTimer')
//     clock.textContent = `${timer.days} days, ${timer.hours} hours, ${timer.minutes} minutes, ${timer.seconds}, seconds`
//     if (total < 0) {
//       clearInterval(interval)
//       clock.textContent = 'Mission has launched!'
//     }
//   }, 1000)
// }

const loadAPI = () => {
  getPicAPI()
  copyRight()
  titleOfPic()
  // getSpaceXDetails()
  // nextMission()
}

const displayTitle = picTitle => {
  document.querySelector('.picTitle').textContent = picTitle
}

const displayAttribute = picAuthor => {
  document.querySelector('.author').textContent = picAuthor
}
// define displayStuff function with img parameter
const displayStuff = img => {
  document.querySelector('.nasaPic').src = img
}
// document.querySelector('.left-arrow').addEventListener('click', previousMission)

// document.querySelector('.right-arrow').addEventListener('click', nextMission)
document.addEventListener('DOMContentLoaded', loadAPI) //call the main functions to DOM
