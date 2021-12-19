// TODO: Link this file to index.html & after making necessary changes.

// Auto activation of navbar <a> tag links while scrolling.

// $(document).ready(function () {
//     $(window).on("load scroll", function () {
//       $("section").each(function () {
//         let top = $(window).scrollTop();
//         let height = $(this).height();
//         let id = $(this).attr("id");
//         let offset = $(this).offset().top - 200;

//         if (top > offset && top < offset + height) {
//           $(".navbar ul li a").removeClass("active");
//           $(".navbar").find(`[href="#${id}"]`).addClass("active");
//         }
//       });
//     });
//   });


// Partly works:- https://codepen.io/eksch/pen/xwdOeK?editors=0010

$(window).scroll(function(){
    var scrollDistance=$(window).scrollTop();
    $(".page-section").each(function(i){
        if($(this).position().top<=scrollDistance){
            $(".navbar ul li a.active").removeClass("active");
            $(".navbar ul li a").eq(i).addClass("active");
        }
    })
}).scroll();