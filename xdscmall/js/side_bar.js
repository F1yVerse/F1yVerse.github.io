$(window).on("scroll", function () {
  if (window.pageYOffset > 0) {
    $(".side_bar .go-to-top").css({
      display: "flex",
    });
  } else {
    $(".side_bar .go-to-top").css({
      display: "none",
    });
  }
});
$(".side_bar .go-to-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    200
  );
});
