var shop_ul = document.querySelector('.shop_ul');
var next = document.querySelector('.next');
var last = document.querySelector('.last');
var shop_li = document.querySelectorAll('.shop_ul>li');
var dian_li = document.querySelectorAll('.dian>li');

var img = 0;
var circle = 0;
for (var i = 0; i < dian_li.length; i++) {
    dian_li[i].index = i;
    dian_li[i].onclick = function () {
        circle = this.index;
        img = this.index;
        for (var i = 0; i < dian_li.length; i++) {
            dian_li[i].className = "";
        }
        this.className = "on";
        var a = img * -758;
        moveanimation2(shop_ul, a);
    }
};
next.onclick = function () {
    img++;
    circle++;
    if (img > 5) {
        shop_ul.style.left = 0;
        img = 1;
    }
    if (circle > 4) {
        circle = 0;
    }
    for (var i = 0; i < dian_li.length; i++) {
        dian_li[i].className = "";
    }
    dian_li[circle].className = "on";
    var a = img * -758;
    moveanimation2(shop_ul, a);
}
last.onclick = function () {
    img--;
    circle--;
    if (img < 0) {
        img = 4;
    }
    if (circle < 0) {
        circle = 4;
    }
    for (var i = 0; i < circle.length; i++) {
        circle[i].className = "";
    }
    circle[circle].className = "on";
    var a = img * -758;
    moveanimation2(shop_ul, a);
}
shop_ul.onmouseover = function () {
    last.style.display = "block";
    next.style.display = "block";
    clearInterval(shop_ul.auto);

}
shop_ul.onmouseout = function () {
    last.style.display = "none";
    next.style.display = "none";
    autoplay();
}
autoplay();

function autoplay() {
    shop_ul.auto = setInterval(function () {

        next.onclick();

    }, 4000)
};
var login_a = document.querySelectorAll('.login_tit>a');
$(".login_tit>a").mouseover(function () {
    for (var i = 0; i < $(".login_tit>a").length; i++) {
        $(".login_tit>a")[i].className = ""
    }
    this.className = "red";
});

$(".login_tit>a").eq(0).mouseover(function () {
    $('.conul1').css('display', 'block');
    $('.conul2').css('display', 'none');
});
$(".login_tit>a").eq(1).mouseover(function () {
    $('.conul1').css('display', 'none');
    $('.conul2').css('display', 'block');

});

var fix = [];
$.each($('.fixa'), function (index, item) {
    fix.push($(item).offset().top)
})
$(window).on('scroll', function () {
    var fix1 = $(window).scrollTop();
    if (fix1 >= 300) {
        $('.fix_box').css({
            "display": "block"
        })
    } else {
        $('.fix_box').css({
            "display": "none"
        })
    }
    fix.forEach((item, index) => {
        if (item - fix1 <= 400 && item >= fix1) {
            $(".fix_box .fix_nav").eq(index).addClass('fix_a').siblings().removeClass("fix_a");
            $(".fix_box .fix_nav .fix_j").eq(index).css({
                "display": "block"
            })
        } else {
            $(".fix_box .fix_nav .fix_j").eq(index).css({
                "display": "none"
            })
        }
    });
})
$(".fix_box .fix_nav").on('click', function () {
    var of = $(".fixa").eq($(this).index()).offset().top;
    $('html, body').animate({
        scrollTop: of -100
    }, 300)
})

$(".fix_box .fix_top").on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300)
});
for (var i = 0; i < obj.home.php.length; i++) {
    $(".com3_img img")[i].src = obj.home.php[i].img;
    $(".com3_txt")[i].innerText = obj.home.php[i].name;
    $(".com3_price")[i].innerText = obj.home.php[i].print;
};
for (var i = 0; i < obj.home.shop.length; i++) {
    $(".ar_img img")[i].src = obj.home.shop[i].img;
    $(".ar_name")[i].innerText = obj.home.shop[i].name;
    $(".ar_money")[i].innerText = obj.home.shop[i].print;
    $(".ar_cash")[i].innerText = obj.home.shop[i].oldprint;
}