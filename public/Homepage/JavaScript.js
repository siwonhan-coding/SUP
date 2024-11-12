document.addEventListener("DOMContentLoaded", function () {
  const imageData = {
    1: {
      title: "SDG 11",
      description:
        "Sustainable Cities and Communities aims to make cities inclusive, safe, resilient, and sustainable for everyone.",
      color: "#ffa533", // Background color
      textColor: "#000000", // Text color
      gradientColors: {
        start: "#0d0e0e", // Custom gradient start color for SDG 11
        middle: "#e9fcfc",
        end: "#ffa533",
      },
    },
    2: {
      title: "SDG 3",
      description:
        "Good Health and Well-being aims to ensure healthy lives and promote well-being for people of all ages.",
      color: "#4CBB17",
      textColor: "#000000",
      gradientColors: {
        start: "#0d0e0e", // Custom gradient for SDG 3
        middle: "#e9fcfc",
        end: "#4CBB17",
      },
    },
    3: {
      title: "SDG 2",
      description:
        "Zero Hunger aims to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
      color: "#ffcc00",
      textColor: "#000000",
      gradientColors: {
        start: "#0d0e0e", // Custom gradient for SDG 2
        middle: "#e9fcfc",
        end: "#ffcc00",
      },
    },
    4: {
      title: "SDG 1",
      description:
        "No Poverty aims to end poverty in all its forms everywhere and ensure everyone has basic living standards and social protection.",
      color: "#ff5050",
      textColor: "#000000",
      gradientColors: {
        start: "#0d0e0e", // Custom gradient for SDG 1
        middle: "#e9fcfc",
        end: "#4cfe05",
      },
    },
    5: {
      title: "SDG 17",
      description:
        "Partnerships for the Goals is about working together globally to achieve all the sustainable development goals.",
      color: "#2ba0ff",
      textColor: "#000000",
      gradientColors: {
        start: "#0d0e0e", // Custom gradient for SDG 17
        middle: "#e9fcfc",
        end: "#fe8005",
      },
    },
  };

  const carouselItems = document.querySelectorAll(".carousel__item");
  const imageTitle = document.querySelector(".image-title");
  const imageDescription = document.querySelector(".image-description");
  const card = document.querySelector(".card");

  carouselItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const dataId = index + 1; // Get the ID based on the index (1-5)
      const data = imageData[dataId]; // Fetch the corresponding SDG data

      // Update the card with new data
      imageTitle.textContent = data.title;
      imageDescription.textContent = data.description;
      card.style.backgroundColor = data.color; // Update card background color
      card.style.color = data.textColor; // Update text color to ensure contrast

      // Dynamically set the gradient colors using CSS variables
      card.style.setProperty("--gradient-start", data.gradientColors.start);
      card.style.setProperty("--gradient-middle", data.gradientColors.middle);
      card.style.setProperty("--gradient-end", data.gradientColors.end);
    });
  });

  // Intersection Observer for revealing elements with 'hidden' class when in view
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
});

// Carousel state and elements
const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

// Event listener for carousel item clicks
carouselList.addEventListener("click", function (event) {
  const newActive = event.target.closest(".carousel__item");

  if (!newActive || newActive.classList.contains("carousel__item_active")) {
    return;
  }

  updateCarousel(newActive);
});

// Function to update carousel items’ positions
const updateCarousel = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  // Find elements with specific data positions
  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  // Remove active class from the current item
  current.classList.remove("carousel__item_active");

  // Update positions of carousel items
  [current, prev, next, first, last].forEach((item) => {
    const itemPos = item.dataset.pos;
    item.dataset.pos = getPosition(itemPos, newActivePos);
  });

  // Add active class to the new active item
  newActive.classList.add("carousel__item_active");
};

// Function to calculate new positions for carousel items
const getPosition = function (current, active) {
  const diff = current - active;

  return Math.abs(current - active) > 2 ? -current : diff;
};
