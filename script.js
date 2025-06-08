document.addEventListener('DOMContentLoaded', function() {
  // Loader
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    }
  }, 1500);

  // Meniu mobil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
  }

  // Funcționalitate submeniu Portfolio
  const portfolioItem = document.querySelector('.portfolio-item');
  const portfolioWrapper = document.querySelector('.portfolio-wrapper');
  const portfolioArrow = document.querySelector('.portfolio-arrow');

  if (portfolioWrapper) {
    portfolioWrapper.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        portfolioItem.classList.toggle('active');
      }
    });
  }

  // Închide submeniul la click în afara
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (portfolioItem && !portfolioItem.contains(e.target)) {
        portfolioItem.classList.remove('active');
      }
    }
  });

  // Slideshow functionality
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let slideInterval;

  function showSlide(index) {
    if (index >= slides.length) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }
    
    slides.forEach(function(slide) {
      slide.classList.remove('active');
      slide.style.opacity = '0';
    });
    
    dots.forEach(function(dot) {
      dot.classList.remove('active');
    });
    
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    setTimeout(function() {
      slides[currentSlide].style.opacity = '1';
    }, 10);
    
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlideshow() {
    if (slides.length > 0) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  startSlideshow();

  const slideshow = document.querySelector('.slideshow');
  if (slideshow) {
    slideshow.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });
    
    slideshow.addEventListener('mouseleave', startSlideshow);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      prevSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  if (dots.length > 0) {
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  }

  if (slideshow) {
    slideshow.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(slideInterval);
    });

    slideshow.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide();
    }
  }

  if (slides.length > 0) {
    showSlide(0);
  }

  // Fullscreen slideshow functionality
  function initFullscreenSlideshow() {
    const portfolioSlideshows = document.querySelectorAll('.portfolio-slideshow');
    
    portfolioSlideshows.forEach(slideshow => {
      slideshow.addEventListener('click', function(e) {
        // Verifică dacă click-ul nu este pe un arrow sau dot
        if (!e.target.closest('.arrow') && !e.target.closest('.dot')) {
          openFullscreenSlideshow(this);
        }
      });
    });
  }

  function openFullscreenSlideshow(slideshow) {
    const slides = Array.from(slideshow.querySelectorAll('.slide'));
    const activeIndex = slides.findIndex(slide => slide.classList.contains('active'));
    
    // Creează elementul fullscreen
    const fullscreen = document.createElement('div');
    fullscreen.className = 'fullscreen-slideshow';
    
    // Adaugă butonul de închidere
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-fullscreen';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(fullscreen);
      document.body.style.overflow = 'auto';
    });
    fullscreen.appendChild(closeBtn);
    
    // Adaugă slides
    const slidesContainer = document.createElement('div');
    slidesContainer.style.width = '100%';
    slidesContainer.style.height = '100%';
    slidesContainer.style.position = 'relative';
    slidesContainer.style.display = 'flex';
    slidesContainer.style.alignItems = 'center';
    slidesContainer.style.justifyContent = 'center';

    document.addEventListener('DOMContentLoaded', function() {
  // Loader
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    }
  }, 1500);

  // Meniu mobil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
  }

  // Funcționalitate submeniu Portfolio
  const portfolioItem = document.querySelector('.portfolio-item');
  const portfolioWrapper = document.querySelector('.portfolio-wrapper');
  const portfolioArrow = document.querySelector('.portfolio-arrow');

  if (portfolioWrapper) {
    portfolioWrapper.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        portfolioItem.classList.toggle('active');
      }
    });
  }

  // Închide submeniul la click în afara
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (portfolioItem && !portfolioItem.contains(e.target)) {
        portfolioItem.classList.remove('active');
      }
    }
  });

  // Slideshow functionality
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let slideInterval;

  function showSlide(index) {
    if (index >= slides.length) {
      index = 0;
    } else if (index < 0) {
      index = slides.length - 1;
    }
    
    slides.forEach(function(slide) {
      slide.classList.remove('active');
      slide.style.opacity = '0';
    });
    
    dots.forEach(function(dot) {
      dot.classList.remove('active');
    });
    
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    setTimeout(function() {
      slides[currentSlide].style.opacity = '1';
    }, 10);
    
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlideshow() {
    if (slides.length > 0) {
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  startSlideshow();

  const slideshow = document.querySelector('.slideshow');
  if (slideshow) {
    slideshow.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });
    
    slideshow.addEventListener('mouseleave', startSlideshow);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
      prevSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  if (dots.length > 0) {
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  }

  if (slideshow) {
    slideshow.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      clearInterval(slideInterval);
    });

    slideshow.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide();
    }
  }

  if (slides.length > 0) {
    showSlide(0);
  }

  // Fullscreen slideshow functionality
  function initFullscreenSlideshow() {
    const portfolioSlideshows = document.querySelectorAll('.portfolio-slideshow');
    
    portfolioSlideshows.forEach(slideshow => {
      slideshow.addEventListener('click', function(e) {
        // Verifică dacă click-ul nu este pe un arrow sau dot
        if (!e.target.closest('.arrow') && !e.target.closest('.dot')) {
          openFullscreenSlideshow(this);
        }
      });
    });
  }

  function openFullscreenSlideshow(slideshow) {
    const slides = Array.from(slideshow.querySelectorAll('.slide'));
    const activeIndex = slides.findIndex(slide => slide.classList.contains('active'));
    
    // Creează elementul fullscreen
    const fullscreen = document.createElement('div');
    fullscreen.className = 'fullscreen-slideshow';
    
    // Adaugă butonul de închidere
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-fullscreen';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(fullscreen);
      document.body.style.overflow = 'auto';
    });
    fullscreen.appendChild(closeBtn);
    
    // Adaugă slides
    const slidesContainer = document.createElement('div');
    slidesContainer.style.width = '100%';
    slidesContainer.style.height = '100%';
    slidesContainer.style.position = 'relative';
    
    slides.forEach((slide, index) => {
      const fullscreenSlide = document.createElement('div');
      fullscreenSlide.className = `fullscreen-slide ${index === activeIndex ? 'active' : ''}`;
      fullscreenSlide.style.backgroundImage = slide.style.backgroundImage;
      slidesContainer.appendChild(fullscreenSlide);
    });
    
    fullscreen.appendChild(slidesContainer);
    
    // Adaugă săgeți de navigare
    const prevArrow = document.createElement('div');
    prevArrow.className = 'fullscreen-arrow fullscreen-prev';
    prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevArrow.addEventListener('click', () => navigateFullscreen(-1));
    fullscreen.appendChild(prevArrow);
    
    const nextArrow = document.createElement('div');
    nextArrow.className = 'fullscreen-arrow fullscreen-next';
    nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextArrow.addEventListener('click', () => navigateFullscreen(1));
    fullscreen.appendChild(nextArrow);
    
    // Adaugă punctele de navigare
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'fullscreen-dots-container';
    
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `fullscreen-dot ${index === activeIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        showFullscreenSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    
    fullscreen.appendChild(dotsContainer);
    
    // Adaugă fullscreen la body
    document.body.appendChild(fullscreen);
    document.body.style.overflow = 'hidden';
    
    // Setează starea curentă
    let currentFullscreenSlide = activeIndex;
    const fullscreenSlides = fullscreen.querySelectorAll('.fullscreen-slide');
    const fullscreenDots = fullscreen.querySelectorAll('.fullscreen-dot');
    
    // Funcții de navigare
    function showFullscreenSlide(index) {
      fullscreenSlides.forEach(slide => slide.classList.remove('active'));
      fullscreenDots.forEach(dot => dot.classList.remove('active'));
      
      currentFullscreenSlide = index;
      fullscreenSlides[currentFullscreenSlide].classList.add('active');
      fullscreenDots[currentFullscreenSlide].classList.add('active');
    }
    
    function navigateFullscreen(direction) {
      let newIndex = currentFullscreenSlide + direction;
      if (newIndex >= fullscreenSlides.length) newIndex = 0;
      if (newIndex < 0) newIndex = fullscreenSlides.length - 1;
      showFullscreenSlide(newIndex);
    }
    
    // Adaugă event listener pentru taste
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        document.body.removeChild(fullscreen);
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleKeyDown);
      } else if (e.key === 'ArrowLeft') {
        navigateFullscreen(-1);
      } else if (e.key === 'ArrowRight') {
        navigateFullscreen(1);
      }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Șterge event listener-ul când se închide fullscreen
    fullscreen.addEventListener('DOMNodeRemoved', () => {
      document.removeEventListener('keydown', handleKeyDown);
    });
  }

  // Inițializează funcționalitatea fullscreen
  initFullscreenSlideshow();

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (navMenu) {
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
      }
      
      if (portfolioItem) {
        portfolioItem.classList.remove('active');
      }
    }
  });
});
    
    slides.forEach((slide, index) => {
      const fullscreenSlide = document.createElement('div');
      fullscreenSlide.className = `fullscreen-slide ${index === activeIndex ? 'active' : ''}`;
      fullscreenSlide.style.backgroundImage = slide.style.backgroundImage;
      slidesContainer.appendChild(fullscreenSlide);
    });
    
    fullscreen.appendChild(slidesContainer);
    
    // Adaugă săgeți de navigare
    const prevArrow = document.createElement('div');
    prevArrow.className = 'fullscreen-arrow fullscreen-prev';
    prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevArrow.addEventListener('click', () => navigateFullscreen(-1));
    fullscreen.appendChild(prevArrow);
    
    const nextArrow = document.createElement('div');
    nextArrow.className = 'fullscreen-arrow fullscreen-next';
    nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextArrow.addEventListener('click', () => navigateFullscreen(1));
    fullscreen.appendChild(nextArrow);
    
    // Adaugă punctele de navigare
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'fullscreen-dots-container';
    
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `fullscreen-dot ${index === activeIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        showFullscreenSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    
    fullscreen.appendChild(dotsContainer);
    
    // Adaugă fullscreen la body
    document.body.appendChild(fullscreen);
    document.body.style.overflow = 'hidden';
    
    // Setează starea curentă
    let currentFullscreenSlide = activeIndex;
    const fullscreenSlides = fullscreen.querySelectorAll('.fullscreen-slide');
    const fullscreenDots = fullscreen.querySelectorAll('.fullscreen-dot');
    
    // Funcții de navigare
    function showFullscreenSlide(index) {
      fullscreenSlides.forEach(slide => slide.classList.remove('active'));
      fullscreenDots.forEach(dot => dot.classList.remove('active'));
      
      currentFullscreenSlide = index;
      fullscreenSlides[currentFullscreenSlide].classList.add('active');
      fullscreenDots[currentFullscreenSlide].classList.add('active');
    }
    
    function navigateFullscreen(direction) {
      let newIndex = currentFullscreenSlide + direction;
      if (newIndex >= fullscreenSlides.length) newIndex = 0;
      if (newIndex < 0) newIndex = fullscreenSlides.length - 1;
      showFullscreenSlide(newIndex);
    }
    
    // Adaugă event listener pentru taste
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        document.body.removeChild(fullscreen);
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleKeyDown);
      } else if (e.key === 'ArrowLeft') {
        navigateFullscreen(-1);
      } else if (e.key === 'ArrowRight') {
        navigateFullscreen(1);
      }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    // Șterge event listener-ul când se închide fullscreen
    fullscreen.addEventListener('DOMNodeRemoved', () => {
      document.removeEventListener('keydown', handleKeyDown);
    });
  }

  // Inițializează funcționalitatea fullscreen
  initFullscreenSlideshow();

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      if (navMenu) {
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
      }
      
      if (portfolioItem) {
        portfolioItem.classList.remove('active');
      }
    }
  });
});