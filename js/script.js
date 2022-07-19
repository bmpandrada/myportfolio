$(document).ready(function () {
  //THIS IS FOR INTRO CONTENT
  const content = "Hello, I am 🖳 Frontend WebDeveloper.";
  const ele = "<span>" + content.split("").join("</span><span>") + "</span>";

  $(ele)
    .hide()
    .appendTo(".home .home-content .text-1")
    .each(function (i) {
      $(this)
        .delay(100 * i)
        .css({
          display: "inline",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    });

  //THIS IS FOR MENU TOGGLE
  //MENU TAB WILL APPEAR AFTER MINIMIZING
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");

    $(".navbar .menu").toggleClass("active");
    $(".menu-btn img").toggleClass("active");
  });

  //THIS IS FOR AFTER CLICK MENU//
  $(".navbar .menu").on("click", (event) => {
    $(event.currentTarget).toggleClass("active");
    $(this).find(".menu-btn").toggleClass("active");
  });

  //THIS IS FOR read/less text
  $(".about .about-content .right .read .readmore").click(function () {
    $(this).text($(this).text() == "See Less" ? "Read more..." : "See Less");
  });
  $(".about .about-content .right .read").click(function () {
    $(this).toggleClass("active");
    $(".about .about-content .right .more").delay(200).slideToggle(500)(
      "active"
    );
  });

  //THIS IS FOR link smooth behavior
  $("a").click(function () {
    $("*").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );
  });

//banner parallax

let mountain = document.getElementById("mountain");


window.addEventListener('scroll', function(){
  var value  = window.scrollY;

  moon.style.top = value * 2.5 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  sun.style.bottom = value * 2 + 'px';

  
});




  //navigation switch sticky
  $(window).scroll(function () {
    //-------------------------///
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 20) {
      $(".home").addClass("sticky");
    } else {
      $(".home").removeClass("sticky");
    }
///
    if (this.scrollY > 20) {
      $(".ps, .sq, .ht, .cs").addClass("sticky");
    } else {
      $(".ps, .sq, .ht, .cs").removeClass("sticky");
    }


    if (this.scrollY > 10) {
      $(".la").addClass("sticky");
    } else {
      $(".la").removeClass("sticky");
    }
///
    if (this.scrollY > 100) {
      $(".sun").addClass("sticky");
    } else {
      $(".sun").removeClass("sticky");
    }


    if (this.scrollY > 100) {
      $(".moon").addClass("sticky");
    } else {
      $(".moon").removeClass("sticky");
    }


    if (this.scrollY > 20) {
      $(".navbar .menu li a").addClass("sticky");
    } else {
      $(".navbar .menu li a").removeClass("sticky");
    }
    if (this.scrollY > 20) {
      $(".logo h1 a").addClass("sticky");
    } else {
      $(".logo h1 a").removeClass("sticky");
    }
    if (this.scrollY > 400) {
      $(
        ".about .about-content .left img,  .about .about-content .right"
      ).addClass("sticky");
    } else {
      $(
        ".about .about-content .left img, .about .about-content .right"
      ).removeClass("sticky");
    }
    if (this.scrollY > 820) {
      $(".service .title, .service .service-content .card").addClass("sticky");
    } else {
      $(".service .title, .service .service-content .card").removeClass(
        "sticky"
      );
    }
  });
});
