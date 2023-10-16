var Dash =document.getElementById("Dashboard1");
var cont =document.getElementById("contact1");

function showSearch(){
  $(".nav-inp").toggle(600); 
}

function contact(){
  $(Dash).hide();
  $(cont).toggle();
  $(".btn2").removeClass("bgmenu");
  $(".btn1").toggleClass("bgmenu");
  }
  
  function Dashboard(){
    $(cont).hide();
  $(Dash).toggle();
  $(".btn1").removeClass("bgmenu");
  $(".btn2").toggleClass("bgmenu");
  }
  
var slider1 = new Swiper(".slider-onee .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // options for slider 1
});

// add i add the navigation for this slider
var slider2 = new Swiper(".slider-two .mySwiper", {
  slidesPerView: 6,    // this code that let the slides be 8 in one slide
  spaceBetween: 31,
  freeMode: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});

var slider3 = new Swiper(".slider3 .mySwiper", {
  slidesPerView: 1, // this code that let the slides be 8 in one slide
  spaceBetween: 31,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // options for slider 2
});

// Responsive Configuration
// slider3.on('resize', function () {
//   if (window.innerWidth >= 768) {
//     slider3.params.slidesPerView = 4; // Display 4 cards on larger screens
//   } else if (window.innerWidth >= 580) {
//     slider3.params.slidesPerView = 3; // Display 2 cards on smaller screens
//   }else{
//       slider3.params.slidesPerView = 1; // Display 2 cards on smaller screens
//   }
//   slider3.update(); // Update swiper after changing slidesPerView
// });

// // Initialize slider
// slider3.init();

var slider4 = new Swiper(".slider4 .mySwiper", {
  slidesPerView: 3, // this code that let the slides be 8 in one slide
  spaceBetween: 10,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});

// Responsive Configuration
// slider4.on('resize', function () {
//   if (window.innerWidth >= 768) {
//     slider4.params.slidesPerView = 4; // Display 4 cards on larger screens
//   } else if (window.innerWidth >= 580) {
//     slider4.params.slidesPerView = 3; // Display 2 cards on smaller screens
//   }else{
//       slider4.params.slidesPerView = 1; // Display 2 cards on smaller screens
//   }
//   slider4.update(); // Update swiper after changing slidesPerView
// });
// // Initialize slider
// slider4.init();

var slider5 = new Swiper(".slider5 .mySwiper", {
  slidesPerView: 7, // this code that let the slides be 8 in one slide
  spaceBetween: 10,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});
// Responsive Configuration
// slider5.on('resize', function () {
//   if (window.innerWidth >= 768) {
//     slider5.params.slidesPerView = 5; // Display 5 cards on larger screens
//   } else if (window.innerWidth >= 580) {
//     slider5.params.slidesPerView = 3; // Display 2 cards on smaller screens
//   }else{
//       slider5.params.slidesPerView = 1; // Display 2 cards on smaller screens
//   }
//   slider5.update(); // Update swiper after changing slidesPerView
// });
// // Initialize slider
// slider5.init();


var slider7 = new Swiper(".slider7 .mySwiper", {
  slidesPerView: 7, // this code that let the slides be 8 in one slide
  spaceBetween: 31,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});

