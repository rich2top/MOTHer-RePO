function filterProperties() {
  const location = document.getElementById("location").value.toLowerCase()
  const propertyType = document
    .getElementById("propertyType")
    .value.toLowerCase()
  const priceInput = document.getElementById("price")
  const price = parseFloat(priceInput.value)
  const bedroom = parseInt(document.getElementById("bedroom").value)
  const bathroom = parseInt(document.getElementById("bathroom").value)

  // Check if the price is a valid number
  if (isNaN(price)) {
    alert("Please enter a valid price.")
    priceInput.focus()
    return
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (location === "" || property.location.toLowerCase().includes(location)) &&
      (propertyType === "" || property.type.toLowerCase() === propertyType) &&
      property.price <= price &&
      (isNaN(bedroom) || property.bedroom === bedroom) &&
      (isNaN(bathroom) || property.bathroom === bathroom)
    )
  })

  displayProperties(filteredProperties)
}

// Function to format the price input with comma separator
function formatPrice(input) {
  // Remove non-numeric characters and leading zeros
  const numericValue = input.value.replace(/\D/g, "").replace(/^0+/, "")

  // Format the numeric value with commas
  const formattedValue = numberWithCommas(numericValue)

  // Update the input field with the formatted value
  input.value = "₦" + formattedValue
}

// Function to add commas to a numeric value
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Javascript file for video - gallery play icon
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo")
  const playButton = document.querySelector(".play-button")

  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play()
      playButton.style.display = "none" // Hide play button when video plays
    } else {
      video.pause()
    }
  })
})

// Functions plays video
function toggleVideo() {
  var video = document.getElementById("myVideo")
  var playButton = document.querySelector(".play-button")

  if (video.paused) {
    video.play()
    playButton.style.display = "none"
  } else {
    video.pause()
    playButton.style.display = "block"
  }
}

// JavaScript to increment the counters separately
const yearCounter = document.getElementById("yearCounter")
const projectsCounter = document.getElementById("projectsCounter")
const estatesCounter = document.getElementById("estatesCounter")

const startYear = 0
const endYear = 2020
const incrementDuration = 0.2 // in milliseconds (1 second)
const incrementValue = 1

function incrementCounter(
  counterElement,
  startValue,
  endValue,
  duration,
  increment
) {
  let currentValue = startValue
  const interval = setInterval(() => {
    counterElement.textContent = currentValue
    currentValue += increment
    if (currentValue > endValue) {
      counterElement.textContent = endValue
      clearInterval(interval)
    }
  }, duration)
}

incrementCounter(
  yearCounter,
  startYear,
  endYear,
  incrementDuration,
  incrementValue
)

// Adjust start and end values for other counters
const startProjects = 0
const endProjects = 100 // Change this to the desired number of projects completed
incrementCounter(
  projectsCounter,
  startProjects,
  endProjects,
  incrementDuration,
  incrementValue
)

const startEstates = 0
const endEstates = 10 // Change this to the desired number of estates built
incrementCounter(
  estatesCounter,
  startEstates,
  endEstates,
  incrementDuration,
  incrementValue
)

// Happy Client JS
// Add this JavaScript to your page to enable scrolling every 6 seconds
const flexbox = document.querySelector(".happy-client-flexbox")
const flexboxItem = document.querySelectorAll(".happy-client-item")

let currentIndex = 0

function scrollFlexbox() {
  if (currentIndex >= flexboxItem.length) {
    currentIndex = 0
  }
  const translateValue = -currentIndex * 33.33
  flexbox.style.transform = `translateX(${translateValue}%)`
  currentIndex++
}

setInterval(scrollFlexbox, 6000) // Scroll every 6 seconds

// Sticky Nav Function
$(document).ready(function () {
  // Check if user has scrolled down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      // Apply scrolled class to navbar
      $("#navbar").addClass("scrolled")
    } else {
      // Remove scrolled class from navbar
      $("#navbar").removeClass("scrolled")
    }
  })
})
