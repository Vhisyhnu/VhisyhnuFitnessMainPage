document.addEventListener('DOMContentLoaded', function () {
  var testimonials = document.getElementById('testimonial-H5SQr2ubd3');
  var modal = document.getElementById('testimonialModal');
  var modalText = document.getElementById('testimonialModalText');
  var closeButton = modal ? modal.querySelector('.testimonial-modal__close') : null;
  var overlay = modal ? modal.querySelector('.testimonial-modal__overlay') : null;
  var modalBody = modal ? modal.querySelector('.testimonial-modal__body') : null;

  if (!testimonials || !modal || !modalText || !closeButton || !overlay || !modalBody) {
    return;
  }

  var openModal = function (content) {
    modalText.innerHTML = content;
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('testimonial-modal-open');
    modalBody.scrollTop = 0;
    closeButton.focus();
  };

  var closeModal = function () {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('testimonial-modal-open');
  };

  testimonials.querySelectorAll('.read-more-button').forEach(function (button) {
    button.addEventListener('click', function () {
      var content = button.closest('.testimonial-content');
      if (!content) {
        return;
      }

      var paragraph = content.querySelector('.testimonial-content-text');
      if (!paragraph) {
        return;
      }

      openModal(paragraph.innerHTML.trim());
    });
  });

  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });
});
