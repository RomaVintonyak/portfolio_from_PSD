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
});
