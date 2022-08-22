// 品牌描述
$(".p_li").hover(function() {
    $(this).children(":eq(0)").stop().slideToggle(500);
    $(this).children(":eq(0)").next().stop().slideToggle(500);
});

//回到顶部
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".p_top").fadeIn(1000);
    } else {
        $(".p_top").fadeOut(1000);
    }
});
$(".p_top").click(function() {
    $(window).scrollTop(0);
});
var timer;
$(".header-btn").mouseenter(function() {
    console.log("?");
    $(".shop_left").show();
});
// $(".header-btn").mouseleave(function () {
//   console.log("gg");
//   timer = setTimeout(function () {
//     $(".shop_left").hide();
//   }, 100);
// });
$(".shop_left").on("mouseenter", function() {
    clearTimeout(timer);
    $(".shop_left").show();
});
$(".shop_left").on("mouseleave", function() {
    $(".shop_left").hide();
});