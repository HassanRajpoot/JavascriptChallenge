function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderimages = document.querySelectorAll('.slide-in');

  function checkslide(e){
      sliderimages.forEach(sliderimage =>{
          const slideinAt = (window.scrollY + window.innerHeight) - sliderimage.height / 2;
          const imageBottom = sliderimage.offsetTop + sliderimage.height;
          const isHalfShown = slideinAt > sliderimage.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;
          if (isHalfShown && isNotScrolledPast) {
            sliderimage.classList.add('active');
          } else {
            sliderimage.classList.remove('active');
          }
      });
  }

  window.addEventListener('scroll',debounce(checkslide));
