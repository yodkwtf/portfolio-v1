// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('theme');
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeStylesheet.href = storedTheme;
  } else {
    themeStylesheet.href = './css/light-theme.css';
  }
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes('dark')) {
      themeStylesheet.href = './css/light-theme.css';
      //   themeToggle.innerText = 'Light Mode';
    } else {
      // if it's dark -> go light
      themeStylesheet.href = './css/dark-theme.css';
      // themeToggle.innerText = 'Dark Mode';
    }
    // save the preference to localStorage
    localStorage.setItem('theme', themeStylesheet.href);
  });
});

$(document).ready(function () {
  $('.nav-btn').click(function () {
    // displaying links on click
    $('.nav-links').slideToggle(1000);

    // changing nav button
    $('.nav-btn').toggleClass('turn');
  });

  $('.nav-link').click(function () {
    var mq = window.matchMedia('(max-width: 992px)');
    if (mq.matches) {
      // hiding links on click
      $('.nav-links').slideToggle(1000);

      // changing nav button
      $('.nav-btn').toggleClass('turn');
    }
  });

  // transparent background
  $(window).scroll(function () {
    let position = $(window).scrollTop();
    if (position >= 100) {
      $('nav, nav-header').addClass('navBackground');
    } else {
      $('nav, nav-header').removeClass('navBackground');
    }
  });

  // smooth scroll
  $('.nav-link,.light-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    var mq = window.matchMedia('(max-width: 992px)');
    if (mq.matches) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top - 72.81,
          },
          1000
        );
    } else {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top - 68.81,
          },
          1000
        );
    }
  });

  // isotopes
  var $grid = $('.project-images-container').isotope({
    // options
    layoutMode: 'fitRows',
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue,
    });
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });

  // accordion for about page
  $('.about-page-center').accordion({
    active: 0,
    heightStyle: 'content',
  });
});

// ********** set date ************
// select span
const date = (document.getElementById(
  'date'
).innerHTML = new Date().getFullYear());
