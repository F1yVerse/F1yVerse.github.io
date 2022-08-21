var timer;
$(".header-btn").mouseover(function () {
  console.log("?");
  $(".shop_left").show();
});
$(".header-btn").mouseout(function () {
  console.log("gg");
  timer = setTimeout(function () {
    $(".shop_left").hide();
  }, 100);
});
$(".shop_left").on("mouseover", function () {
  clearTimeout(timer);
  $(".shop_left").show();
});
$(".shop_left").on("mouseout", function () {
  $(".shop_left").hide();
});
