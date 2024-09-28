// Initialize Typed.js
var typed = new Typed('.typed', {
    strings: ["Designer", "Developer", "Freelancer"],
    typeSpeed: 50,        // Speed of typing
    backSpeed: 50,        // Speed of backspacing
    backDelay: 1000,      // Pause before backspacing
    startDelay: 500,      // Delay before starting
    loop: true            // Loop the animation
});


let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });