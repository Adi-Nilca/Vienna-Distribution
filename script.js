//butoanele de pe pagina Age Verification

document.addEventListener('DOMContentLoaded', function () {
  var acceptButton = document.getElementById('accept-button');
  var textButtonsContainer = document.querySelector('.footer-box');

  acceptButton.addEventListener('click', function () {
    textButtonsContainer.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cookieButton = document.getElementById('cookie-button');
  var textButtonsContainer = document.querySelector('.footer-box');

  cookieButton.addEventListener('click', function () {
    textButtonsContainer.style.display = 'none';
  });
});

// Navigation bar home page

window.addEventListener('scroll', function () {
  var navBar = document.getElementById('fixed-nav');
  var homeLogo = document.querySelector('.home-logo');

  if (window.scrollY > 0) {
    navBar.style.backgroundColor = '#0D0D0D';
    homeLogo.style.maxHeight = '60px';
    homeLogo.style.width = 'auto';
  } else {
    navBar.style.backgroundColor = 'transparent';
    homeLogo.style.maxHeight = '100px';
    homeLogo.style.width = 'auto';
  }
});

function changeButtonText() {
  const button = document.querySelector('.news-btn');
  button.textContent = 'READ MORE STORIES ON OUR BLOG';
}

function restoreOriginalButtonText() {
  const button = document.querySelector('.news-btn');
  button.textContent = 'READ MORE NEWS ON OUR NEWPAGE';
}
