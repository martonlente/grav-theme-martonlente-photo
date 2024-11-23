(function() {
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

    var iso = new Isotope(isotopeGrid, {
      itemSelector: '.js-isotope-grid-item',
      layoutMode: 'masonry'
    });  
  }

  function init() {
    // TODO: check variable naming
    var isotopeGridHelper = document.querySelector('.js-isotope-grid');

    imgsLoaded(isotopeGridHelper, function() {
      isotopeGrid();
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();
