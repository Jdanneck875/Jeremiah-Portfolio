
document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('.gallery');

  galleries.forEach(gallery => {
    const slide = gallery.querySelector('.slide');
    const images = slide.querySelectorAll('img');
    const leftArrow = gallery.querySelector('.arrow.left');
    const rightArrow = gallery.querySelector('.arrow.right');

    let index = 0;

    function updateSizes() {
      const width = gallery.clientWidth;
      images.forEach(img => {
        img.style.width = width + 'px';
        img.style.flexShrink = '0';
      });
      slide.style.width = (width * images.length) + 'px';
      slide.style.transform = `translateX(-${index * width}px)`;
    }

    function showSlide(newIndex) {
      const width = gallery.clientWidth;
      index = newIndex;

      if (index < 0) {
        index = images.length - 1;
      }
      if (index >= images.length) {
        index = 0;
      }

      slide.style.transform = `translateX(-${index * width}px)`;
    }

    rightArrow.addEventListener('click', () => {
      showSlide(index + 1);
    });

    leftArrow.addEventListener('click', () => {
      showSlide(index - 1);
    });

    window.addEventListener('resize', updateSizes);

    updateSizes();
  });
});
