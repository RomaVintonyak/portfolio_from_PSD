$(function() {
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
});
