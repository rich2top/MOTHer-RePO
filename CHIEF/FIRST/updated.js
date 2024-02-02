// Add this JavaScript to change the header background color on scroll
document.addEventListener("scroll", function () {
  var header = document.getElementById("navbar")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// CAROUSEL
$(document).ready(function () {
  // Automatically advance the Carousel every 6 seconds
  $("#heroSlider").carousel({
    interval: 6000, // 6 seconds
  })
})

// PLAY ICON CONTROL
// JavaScript function to play the video when the play button is clicked
var video = document.getElementById("myVideo")
var playButton = document.getElementById("playButton")

playButton.addEventListener("click", function () {
  if (video.paused || video.ended) {
    video.play()
    playButton.style.display = "none" // Hide the play button when playing
  } else {
    video.pause()
    playButton.style.display = "block" // Show the play button when paused
  }
})

// COUNTER Function
// Function to animate counting
function animateCount(element, target, duration) {
  let start = 0
  const intervalTime = duration / target

  const timer = setInterval(() => {
    start += 1
    element.textContent = start
    if (start === target) {
      clearInterval(timer)
    }
  }, intervalTime)
}

// Call the counting animation for Year of Establishment
const yearCounter = document.getElementById("yearCounter")
animateCount(yearCounter, 2022, 2000) // Count to 2022 in 2 seconds

// Call the counting animation for Number of Projects Completed
const projectsCounter = document.getElementById("projectsCounter")
animateCount(projectsCounter, 100, 2000) // Count to 100 in 2 seconds

// REVIEW Function
$(document).ready(function () {
  var testimonialCarousel = $("#testimonial-carousel")
  testimonialCarousel.owlCarousel({
    items: 2, // Display two testimonials at a time
    loop: true, // Enable infinite loop
    margin: 10, // Spacing between testimonials
    autoplay: true, // Auto-play the carousel
    autoplayTimeout: 6000, // Time between slides (6 seconds)
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: {
        items: 1, // Display one testimonial on smaller screens
      },
      768: {
        items: 2, // Display two testimonials on larger screens
      },
    },
  })

  // Custom slide behavior
  testimonialCarousel.on("translated.owl.carousel", function (event) {
    var visibleItems = event.page.size
    var currentItemIndex = event.item.index
    var nextItemIndex = (currentItemIndex + visibleItems) % event.item.count

    // Remove animation classes from all items
    testimonialCarousel
      .find(".testimonial-item")
      .removeClass("slide-in-left slide-in-right")

    // Add slide-in classes to the next visible items
    testimonialCarousel
      .find(".testimonial-item:eq(" + nextItemIndex + ")")
      .addClass("slide-in-right")
    testimonialCarousel
      .find(".testimonial-item:eq(" + currentItemIndex + ")")
      .addClass("slide-in-left")
  })
})
