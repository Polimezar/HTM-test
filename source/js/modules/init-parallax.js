const initParallax = () => {
  document.addEventListener('mousemove', function (e) {
    let layers = document.querySelectorAll('[data-parallax]');

    if (layers) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let windowWidth = window.innerWidth;
      let windowHeight = window.innerHeight;

      layers.forEach(function (layer, index) {
        let depth = (index + 1) * 10;
        let xOffset = (mouseX - windowWidth / 2) / depth;
        let yOffset = (mouseY - windowHeight / 2) / depth;

        layer.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px)';
      });
    }
  });
};

export {initParallax};
