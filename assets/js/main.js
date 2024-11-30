// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.background = 'rgba(15, 16, 20, 0.95)';
  } else {
      navbar.style.background = 'rgba(15, 16, 20, 0.9)';
  }
});

// Add hover effect to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
      link.style.color = '#8a2be2';
  });
  link.addEventListener('mouseleave', () => {
      link.style.color = '#ffffff';
  });
});

// Add this to the existing JavaScript
function updateCountdown() {
  const now = new Date();
  const event = new Date('December 25, 2024 00:00:00');
  const diff = event - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const item = question.parentNode;
      item.classList.toggle('active');
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const carousel = document.querySelector('.cards');
//   const leftArrow = document.querySelector('.carousel-arrow.left');
//   const rightArrow = document.querySelector('.carousel-arrow.right');

//   leftArrow.addEventListener('click', () => {
//       carousel.scrollBy({ left: -300, behavior: 'smooth' });
//   });

//   rightArrow.addEventListener('click', () => {
//       carousel.scrollBy({ left: 300, behavior: 'smooth' });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  function initCarousel(containerClass) {
      const container = document.querySelector(containerClass);
      if (!container) return;

      const carousel = container.querySelector('.cards, .speakers');
      const leftArrow = container.querySelector('.carousel-arrow.left');
      const rightArrow = container.querySelector('.carousel-arrow.right');

      if (!carousel || !leftArrow || !rightArrow) return;

      const scrollAmount = carousel.clientWidth * 0.8;

      leftArrow.addEventListener('click', () => {
          carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });

      rightArrow.addEventListener('click', () => {
          carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
  }

  // Initialize carousels
  initCarousel('.cards-container');
  initCarousel('.speakers-container');
});

