const slider = document.getElementById('images');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  let index = 0;
  let allowShift = true;

  // Clone first slide and add it at the end
  const firstClone = slides[0].cloneNode(true);
  slider.appendChild(firstClone);

  function updateSlide(animate = true) {
    if (!animate) {
      slider.style.transition = "none";
    } else {
      slider.style.transition = "transform 0.5s ease-in-out";
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    if (!allowShift) return;
    index++;
    updateSlide();

    if (index === totalSlides) {
      allowShift = false;
      setTimeout(() => {
        index = 0;
        updateSlide(false); // jump without animation
        allowShift = true;
      }, 500);
    }
  }

  function prevSlide() {
    if (!allowShift) return;
    if (index === 0) {
      index = totalSlides;
      updateSlide(false);
    }
    index--;
    updateSlide();
  }

  setInterval(() => {
    nextSlide();
  }, 4000);

  updateSlide();
