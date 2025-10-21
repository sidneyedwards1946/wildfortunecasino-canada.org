document.addEventListener('DOMContentLoaded', () => {

  const animationSetup = () => {
    const isMouseTrack = false;
    const isParallax = false;

    if (!isMouseTrack && !isParallax) return;
    if (window.innerWidth <= 992) return;

    document.querySelectorAll('.mouse-track-container').forEach(container => {
        const images = container.querySelectorAll('img');
        images.forEach((img, index) => {
            if (img.classList.contains('rellax') || img.classList.contains('mouse-track-element') || img.classList.contains('interactive-element')) {
                return;
            }

            if (isMouseTrack && isParallax) {
                img.classList.add('interactive-element');
                img.dataset.speed = (index % 2 === 0) ? (25 + index * 5) : -(30 + index * 5);
                img.dataset.parallaxSpeed = (index % 2 === 0) ? -1.5 : 1;
            } else if (isMouseTrack) {
                img.classList.add('mouse-track-element');
                img.dataset.speed = (index % 2 === 0) ? (20 + index * 5) : -(25 + index * 5);
            } else if (isParallax) {
                img.classList.add('rellax');
                img.dataset.rellaxSpeed = (index % 2 === 0) ? -2 : 1;
            }
        });
    });
  };
  animationSetup();
  


  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }


  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }
});