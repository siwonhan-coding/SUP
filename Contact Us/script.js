
  
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