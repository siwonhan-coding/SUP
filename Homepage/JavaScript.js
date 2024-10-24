﻿// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Store references to each image's data along with colors and text colors for each SDG
  const imageData = {
    s1: {
      title: "SDG 17",
      description: "Description for Image 1",
      color: "#3357FF",
      textColor: "#FFFFFF",
    },
    s2: {
      title: "SDG 11",
      description: "Description for Image 2",
      color: "#ffd133",
      textColor: "#000000",
    },
    s3: {
      title: "SDG 2",
      description: "Description for Image 3",
      color: "#ffa533",
      textColor: "#FFFFFF",
    },
    s4: {
      title: "SDG 3",
      description: "Description for Image 4",
      color: "#33FF57",
      textColor: "#000000",
    },
    s5: {
      title: "SDG 1",
      description: "Description for Image 5",
      color: "#ff0902",
      textColor: "#FFFFFF",
    },
  };

  // Select all radio buttons and card elements
  const radios = document.querySelectorAll('input[type="radio"]');
  const imageTitle = document.querySelector(".image-title");
  const imageDescription = document.querySelector(".image-description");
  const card = document.querySelector(".card");

  // Add change event listener to update the card
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const data = imageData[this.id]; // Get the image data based on radio button ID
        imageTitle.textContent = data.title; // Update title
        imageDescription.textContent = data.description; // Update description
        card.style.backgroundColor = data.color; // Update the card background color
        card.style.color = data.textColor; // Update the card font color
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const open = document.querySelector(".container");
  const close = document.querySelector(".close");

  // GSAP Timeline
  var tl = gsap.timeline({
    paused: true,
    reversed: true,
    defaults: { duration: 1, ease: "expo.inOut" },
  });

  tl.to("nav", { right: 0 }) // Move nav into view
    .to("nav", { height: "100vh" }, "-=0.1") // Expand to full height
    .to(
      "nav ul li a",
      { opacity: 1, pointerEvents: "all", stagger: 0.2 }, // Show menu items
      "-=0.8"
    )
    .to(".close", { opacity: 1, pointerEvents: "all" }, "-=0.8") // Show close button
    .to("nav h2", { opacity: 1 }, "-=1"); // Show heading

  // Open button click event
  open.addEventListener("click", () => {
    if (tl.reversed()) {
      tl.play(); // Play animation
    }
  });

  // Close button click event
  close.addEventListener("click", () => {
    tl.reverse(); // Reverse animation
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll('.hidden'); // Ensure 'hidden' elements are selected properly
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Add 'show' class when the element is in view
      } else {
        entry.target.classList.remove('show'); // Remove 'show' class when out of view
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el)); // Apply observer to each hidden element
});
