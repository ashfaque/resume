window.onload = function () {
  // Preloader
  $(document).ready(function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 3000);
  });

  let btnScrollTop = document.querySelector(".btnScrollToTop"); // Scroll Up Button

  window.onscroll = function () {
    scrollIndicator(); // Scroll Progress Bar
    // Scroll Up Button
    if (this.scrollY >= 300) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  };

  // Scroll Progress Bar
  scrollIndicator = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    // console.log(scrolled);
    document.getElementById("pbar").style.width = scrolled + "%";
  };

  // Scroll Up Button
  btnScrollTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Navbar Transparent & solid colored when scrolling
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").removeClass("bg-transparent");
      $("nav").addClass("navbar-dark");
    } else {
      $("nav").addClass("bg-transparent");
      $("nav").removeClass("navbar-dark");
      // $(document).getElementById("topnavbar").style.color = "#1a2238 !important";
    }
  });

  // Activate navbar links after clicking on it
  $(".list .nav-item .nav-link").click(function(){
      $('a.active').removeClass('active');
      $(this).addClass('active');
    // The code below is not working for some reason. It does the exact same thing as the code above:-
    // $(this).addClass("active").siblings().removeClass("active");
  });

};
