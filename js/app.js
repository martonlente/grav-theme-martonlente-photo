(function() {
  function imgsLoaded(container, callback) {
    var imgs = container.getElementsByTagName('img');
    var loadedImgsCount = 0;
    var totalImgsCount = imgs.length;

    if (totalImgsCount == 0) {
      callback();

      return;
    }

    for (var i = 0; i < totalImgsCount; i++) {
      var img = imgs[i];

      img.addEventListener('load', checkImage);
      img.addEventListener('error', checkImage);
    }

    function checkImage() {
      loadedImgsCount++;

      if (loadedImgsCount == totalImgsCount) {
        callback();
      }
    }
  }

  function isotopeGrid() {
    var isotopeGrid = document.querySelector('.js-isotope-grid');

    var iso = new Isotope(isotopeGrid, {
      itemSelector: '.js-isotope-grid-item',
      layoutMode: 'fitRows'
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
