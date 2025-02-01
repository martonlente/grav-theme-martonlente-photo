(function() {
  function setBodyBgColorRandom(interval) {
    function init() {
      const body = document.querySelector('.js-body');

      const bodyBgColorHueRandom = Math.floor(Math.random() * 360); // Colour secondary base: 'hsl(250, 100%, 45%)'
  
      body.style.backgroundColor = `hsl(${bodyBgColorHueRandom}, 100%, 95%)`;
    }
  
    setInterval(init, interval);
  }
  
  function changeLayout(container) {
    var btnChangeLayout = document.querySelector('.js-btn-change-layout');

    btnChangeLayout.addEventListener('click', function() {
      var urlCurrent = window.location.href; // Get URL current
      var paramRandom = '?random=' + Math.random(); // Add parameter random to URL
      var xhr = new XMLHttpRequest();

      xhr.open('GET', urlCurrent + paramRandom, true); // Use URL current with random parameter as endpoint
  
      xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var parser = new DOMParser();
            
            var doc = parser.parseFromString(xhr.responseText, 'text/html');
            var contentNew = doc.querySelector('.js-isotope-grid').innerHTML;

            container.innerHTML = contentNew; // Update container's innerHTML directly

            // Reinit isotope
            imgsLoaded(container, function() {
              isotopeGrid();
            });
          } else {
            // TODO: add error handling
          }
        }
      });

      xhr.send();
    });
  }

  function imgsLoaded(container, callback) {
    var imgs = container.getElementsByTagName('img');
    var imgsCountLoaded = 0;
    var imgsCountTotal = imgs.length;
  
    // If there are no imgs, execute callback and return
    if (imgsCountTotal == 0) {
      callback();

      return;
    }
  
    // Loop through all imgs
    for (var i = 0; i < imgsCountTotal; i++) {
      var img = imgs[i];
  
      // Add event to handle img load error
      img.addEventListener('error', checkImage);
  
      // Add event to handle img load success
      img.addEventListener('load', checkImage);
    }
  
    function checkImage() {
      imgsCountLoaded++;
  
      // If all imgs have been processed, execute callback
      if (imgsCountLoaded == imgsCountTotal) {
        callback();
      }
    }
  }
  
  function isotopeGrid() {
    var isotopeGrid = document.querySelector('.js-isotope-grid');
    var isotopeGridHelperIsLoading = document.querySelector('.js-isotope-grid-helper-is-loading');

    // Hide isotopeGridHelperIsLoading
    isotopeGridHelperIsLoading.classList.add('d-none');

    var iso = new Isotope(isotopeGrid, {
      itemSelector: '.js-isotope-grid-item',
      layoutMode: 'packery',
      packery: {
        columnWidth: '.col-4' // 'col-{random}' smallest
      }
    });  
  }

  function init() {
    // TODO: check variable naming
    var isotopeGridHelper = document.querySelector('.js-isotope-grid');

    changeLayout(isotopeGridHelper);

    imgsLoaded(isotopeGridHelper, function() {
      isotopeGrid();
    });

    setBodyBgColorRandom(8000);
  }

  document.addEventListener('DOMContentLoaded', function() {
    imgGallery.init();
    init();
  });
})();
