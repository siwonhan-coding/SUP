﻿// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Store references to each image's data with colors and text colors for each SDG
  const imageData = {
    1: {
      title: "SDG 11",
      description:
        "Sustainable Cities and Communities aims to make cities inclusive, safe, resilient, and sustainable for everyone.",
      color: "#ffa533",
      textColor: "#000000",
    },
    2: {
      title: "SDG 3",
      description:
        "Good Health and Well-being aims to ensure healthy lives and promote well-being for people of all ages.",
      color: "#33FF57",
      textColor: "#000000",
    },
    3: {
      title: "SDG 2",
      description:
        "Zero Hunger aims to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
      color: "#ffcc00",
      textColor: "#000000",
    },
    4: {
      title: "SDG 1",
      description:
        "No Poverty aims to end poverty in all its forms everywhere and ensure everyone has basic living standards and social protection.",
      color: "#ff5050",
      textColor: "#000000",
    },
    5: {
      title: "SDG 17",
      description:
        "Partnerships for the Goals is about working together globally to achieve all the sustainable development goals.",
      color: "  #2ba0ff",
      textColor: "#000000",
    },
  };

  // Select all carousel items and card elements
  const carouselItems = document.querySelectorAll(".carousel__item");
  const imageTitle = document.querySelector(".image-title");
  const imageDescription = document.querySelector(".image-description");
  const card = document.querySelector(".card");

  // Add click event listener to each carousel item
  carouselItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const dataId = index + 1; // Get data based on item index (1-5)
      const data = imageData[dataId]; // Get image data

      // Update card with selected data
      imageTitle.textContent = data.title;
      imageDescription.textContent = data.description;
      card.style.backgroundColor = data.color;
      card.style.color = data.textColor;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden"); // Ensure 'hidden' elements are selected properly

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add 'show' class when the element is in view
      } else {
        entry.target.classList.remove("show"); // Remove 'show' class when out of view
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el)); // Apply observer to each hidden element
});
const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

carouselList.addEventListener("click", function (event) {
  var newActive = event.target;
  var isItem = newActive.closest(".carousel__item");

  if (!isItem || newActive.classList.contains("carousel__item_active")) {
    return;
  }

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};
