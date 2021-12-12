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
};
