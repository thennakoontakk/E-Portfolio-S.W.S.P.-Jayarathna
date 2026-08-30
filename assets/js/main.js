/**
 * E-Portfolio - S.W.S.P. Jayarathna
 * JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Active page detection & highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Simple Lightbox for Gallery Images
  const galleryImgs = document.querySelectorAll('.gallery-item img');
  if (galleryImgs.length > 0) {
    const modal = document.createElement('div');
    modal.className = 'img-modal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85); display: none; align-items: center;
      justify-content: center; z-index: 2000; cursor: pointer; padding: 20px;
    `;
    const modalImg = document.createElement('img');
    modalImg.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 12px; object-fit: contain; box-shadow: 0 10px 30px rgba(0,0,0,0.5);';
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    galleryImgs.forEach(img => {
      img.closest('.gallery-item').addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
      });
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
