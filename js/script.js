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
  slidesPerView: 6, // this code that let the slides be 8 in one slide
  spaceBetween: 30,
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

var slider3 = new Swiper(".slider3 .mySwiper", {
  slidesPerView: 8, // this code that let the slides be 8 in one slide
  spaceBetween: 40,
  freeMode: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // options for slider 2
});

var slider4 = new Swiper(".slider4 .mySwiper", {
  slidesPerView: 6, // this code that let the slides be 8 in one slide
  spaceBetween: 31,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});

var slider5 = new Swiper(".slider5 .mySwiper", {
  slidesPerView: 5, // this code that let the slides be 8 in one slide
  spaceBetween: 31,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // options for slider 2
});

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

