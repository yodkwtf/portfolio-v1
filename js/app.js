// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeStylesheet.href = storedTheme;
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
    localStorage.setItem('theme', themeStylesheet.href)
  })
})



$(document).ready(function () {


	
  $('.nav-btn').click(function () {

    // displaying links on click
    $('.nav-links').slideToggle(1000);

    // changing nav button
    $('.nav-btn').toggleClass('turn');

  })

  $('.nav-link').click(function () {

    var mq = window.matchMedia("(max-width: 992px)");
    if (mq.matches) {

      // hiding links on click
      $('.nav-links').slideToggle(1000);

      // changing nav button
      $('.nav-btn').toggleClass('turn');
    }

  })



  // transparent background
  $(window).scroll(function () {

    let position = $(window).scrollTop();
    if (position >= 100) {
      $('nav, nav-header').addClass('navBackground')
    }
    else {
      $('nav, nav-header').removeClass('navBackground')
    }

	})



  // smooth scroll
  $('.nav-link,.light-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    var mq = window.matchMedia("(max-width: 992px)");
    if (mq.matches) {
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 72.81
    }, 1000);
    }
    else {
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 68.81
      }, 1000);
    }
  })



  // isotopes
  var $grid = $('.project-images-container').isotope({
    // options
    layoutMode: 'fitRows'
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });

  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
  });



  // owl carousel for sketches
  $('.sketches-center').owlCarousel({
    loop: true,
		margin: 50,
		// autoplay:true,
    nav: true,
    slideBy: 1,
    // autoplayTimeout: 3000,
    // autoplaySpeed: 3000,
    smartSpeed: 3000,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    },
    navText: ["Prev", "Next"]
  })



	// accordion for about page
  $(".about-page-center").accordion({
    active:0,
    heightStyle: "content"
  });



  // magnific pop up
  $('.sketches-page-center').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true,
      enableEscapeKey: true
    }
  });

})




// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());