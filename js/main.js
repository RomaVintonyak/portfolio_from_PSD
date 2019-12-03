$(function() {
  const workSlider = $('[data-slider="slick"]');
  /*Scroll to top*/
  $(function() {
    $("#back_top").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $(back_top).fadeIn();
      } else {
        $(back_top).fadeOut();
      }
    });
    $("#back_top").click(function() {
      $("body, html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  });
  /*filter for category with works*/
  var filter = $("[data-filter]");
  filter.on("click", function(event) {
    event.preventDefault();
    var cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        var workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
  /*script for modal window*/
  const modallCall = $("[data-modal]");
  const modallClose = $("[data-close]");
  modallCall.on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var modalId = $this.data("modal");
    $(modalId).addClass("show");
    $("body").addClass("no__scroll");
    setTimeout(function() {
      $(modalId)
        .find(".modal__dialog")
        .css({
          transform: "rotateX(0)"
        });
    }, 200);
    workSlider.slick("setPosition");
  });
  modallClose.on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var modalParent = $this.parents(".modal");
    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });
    setTimeout(function() {
      modalParent.removeClass("show");
      $("body").removeClass("no__scroll");
    }, 900);
  });
  $(".modal").on("click", function(event) {
    var $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });
    setTimeout(function() {
      $this.removeClass("show");
      $("body").removeClass("no__scroll");
    }, 900);
  });
  $(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
  });
  /*Slick slider https://kenwheeler.github.io/slick */
  workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
  $(".slickPrev").on("click", function(event) {
    event.preventDefault();
    var curentSlider = $(this)
      .parents(".modal")
      .find('[data-slider="slick"]');
    curentSlider.slick("slickPrev");
  });
  $(".slickNext").on("click", function(event) {
    event.preventDefault();
    var curentSlider = $(this)
      .parents(".modal")
      .find('[data-slider="slick"]');
    curentSlider.slick("slickNext");
  });
  /*scroll to blocks*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockId = $(this).data("scroll");
    var blockOffset = $(blockId).offset().top;
    /*nav.removeClass("click");*/
    $("html, body").animate(
      {
        scrollTop: blockOffset - 70
      },
      800
    );
  });
  /*clas show for burger button*/
  $(".burger").on("click", function(event) {
    event.preventDefault();
    $(".burger__icon").toggleClass("show");
  });
  /*Nav Toggle Button for mobile devicess*/
  $("#navToggle").on("click", function(event){
    event.preventDefault();
    $(".nav").toggleClass("click");
  })
});
