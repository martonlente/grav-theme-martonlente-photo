(function() {
  function imgGallery() {
    function init() {
      const btnClose = document.querySelector('.js-img-gallery-btn-close');
      const btnNext = document.querySelector('.js-img-gallery-btn-next');
      const btnPrev = document.querySelector('.js-img-gallery-btn-prev');

      const imgGallery = document.querySelector('.js-img-gallery');
      const imgGalleryItemImg = document.querySelectorAll('.js-img-gallery-item-img');
      const imgGalleryItemImgSingle = document.querySelector('.js-img-gallery-item-img-single');

      let indexCurrent = 0;
  
      function closeImgGallery() {
        imgGallery.classList.add('d-none');
        imgGallery.classList.remove('d-flex');
      }
  
      function openImgGallery(index) {
        indexCurrent = index;
        imgGalleryItemImgSingle.src = imgGalleryItemImg[indexCurrent].src;
        imgGallery.classList.add('d-flex');
        imgGallery.classList.remove('d-none');
      }
  
      function showNext() {
        indexCurrent = (indexCurrent + 1) % imgGalleryItemImg.length;
        imgGalleryItemImgSingle.src = imgGalleryItemImg[indexCurrent].src;
      }
  
      function showPrev() {
        indexCurrent = (indexCurrent - 1 + imgGalleryItemImg.length) % imgGalleryItemImg.length;
        imgGalleryItemImgSingle.src = imgGalleryItemImg[indexCurrent].src;
      }
  
      imgGalleryItemImg.forEach((item, index) => {
        item.addEventListener('click', () => openImgGallery(index));
      });
  
      btnClose.addEventListener('click', closeImgGallery);
      btnNext.addEventListener('click', showNext);
      btnPrev.addEventListener('click', showPrev);
  
      document.addEventListener('keydown', function(e) {
        if (e.key == 'Escape') {
          closeImgGallery();
        } else if (e.key == 'ArrowRight') {
          showNext();
        } else if (e.key == 'ArrowLeft') {
          showPrev();
        }
      });
    };

    document.addEventListener('DOMContentLoaded', function() {
      init();
    });
  }

  // TODO: move function call
  imgGallery();
})();
