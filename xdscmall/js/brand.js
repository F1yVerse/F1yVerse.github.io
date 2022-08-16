// 品牌描述
$(".p_li").hover(function() {
    $(this).children(':eq(0)').stop().slideToggle(500);
    $(this).children(':eq(0)').next().stop().slideToggle(500);
})

//回到顶部
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $(".p_top").fadeIn(1000);
    } else {
        $(".p_top").fadeOut(1000);
    }
})
$(".p_top").click(function() {
    $(window).scrollTop(0);
})