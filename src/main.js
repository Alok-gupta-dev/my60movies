import './style.css'

// Filter buttons ka logic — category match karo, baaki hide karo
const filterBtns = document.querySelectorAll('.filter-btn');
const movieCards = document.querySelectorAll('.movie-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Pehle sab buttons se active styles hatao
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-yellow-400', 'text-gray-900', 'border-yellow-400');
      b.classList.add('bg-transparent', 'text-yellow-100', 'border-yellow-800');
    });

    // Clicked button ko active banao
    btn.classList.add('active', 'bg-yellow-400', 'text-gray-900', 'border-yellow-400');
    btn.classList.remove('bg-transparent', 'text-yellow-100', 'border-yellow-800');

    const filter = btn.getAttribute('data-filter');

    // Cards filter karo — All hai toh sab dikhao, warna match karo
    movieCards.forEach(card => {
      if (filter === 'All' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Scroll to top button — 300px scroll ke baad dikhao
const scrollBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    // Dikhao
    scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
    scrollBtn.classList.add('opacity-100');
  } else {
    // Chhupao
    scrollBtn.classList.add('opacity-0', 'pointer-events-none');
    scrollBtn.classList.remove('opacity-100');
  }
});

// Click pe smoothly top pe le jao
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


   function openLightbox(src) {
      document.getElementById('lightbox-img').src = src
      const lb = document.getElementById('lightbox')
      lb.classList.remove('hidden')
      lb.classList.add('flex')
      document.body.style.overflow = 'hidden'
    }
    function closeLightbox() {
      const lb = document.getElementById('lightbox')
      lb.classList.add('hidden')
      lb.classList.remove('flex')
      document.body.style.overflow = ''
    }
    document.getElementById('lightbox').addEventListener('click', function(e) {
      if (e.target === this) closeLightbox()
    })