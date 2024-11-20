(function() {
  function isotopeGrid() {
    var isotopeGrid = document.querySelector('.js-isotope-grid');

    var iso = new Isotope(isotopeGrid, {
      itemSelector: '.js-isotope-grid-item',
      layoutMode: 'fitRows'
    });  
  }

  function init() {
    isotopeGrid();
  }

  document.addEventListener('DOMContentLoaded', function() {
    init();
  });
})();
