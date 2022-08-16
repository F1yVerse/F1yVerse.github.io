// 轮播图
var g_banner = document.querySelector(".g_banner");
var oUl = document.querySelector(".g_oUl");
var g_list = document.querySelectorAll(".g_list");

var img_counter = 0;
var circle_counter = 0;

for (var i = 0; i < g_list.length; i++) {
    g_list[i].index = i;
    g_list[i].onmouseover = function() {
        circle_counter = this.index;
        img_counter = this.index;

        for (var i = 0; i < g_list.length; i++) {
            g_list[i].className = "g_list";
        }
        this.className = "g_list g_list1"
        var a = this.index * -1920;
        moveanimation2(oUl, a);
    }
}
autoplay();

function autoplay() {
    oUl.auto = setInterval(function() {
        img_counter++;
        circle_counter++;
        if (img_counter > 5) {
            oUl.style.left = 0;
            img_counter = 1;
        }
        if (circle_counter > 4) {
            circle_counter = 0;
        }
        for (var i = 0; i < g_list.length; i++) {
            g_list[i].className = "g_list";
        }
        g_list[circle_counter].className = "g_list g_list1 ";
        var a = img_counter * -1920;
        moveanimation2(oUl, a);
    }, 3000)
}



//热门推荐tab切换
for (var i = 0; i < $(".g_new").length; i++) {
    $(".g_new")[i].index = i;
    $(".g_new")[i].onmouseover = function() {
        for (var i = 0; i < $(".g_new").length; i++) {
            $(".g_new")[i].className = "g_new";
            $(".recommend")[i].style.opacity = "0";
            $(".recommend")[i].style.zIndex = "10";
        }
        this.className = "g_new g_new1";
        $(".recommend")[this.index].style.opacity = "1";
        $(".recommend")[this.index].style.zIndex = "11";
    }
}



//厨房电器
tab($(".pot_li1"), $(".cook_img_1"));
// 大家电
tab($(".pot_li2"), $(".cook_img_2"));
//个护健康
tab($(".pot_li3"), $(".cook_img_3"));
//五金家装
tab($(".pot_li4"), $(".cook_img_4"));
//生活电器
tab($(".pot_li5"), $(".cook_img_5"))




// 随手购
var with_oUl = document.querySelector(".with_oUl");
var cir = document.querySelectorAll(".with_list1");
var you_list = document.querySelector(".you_list");
var zuo_list = document.querySelector(".zuo_list");

var img_coun = 0;
var circle_coun = 0;
for (var i = 0; i < cir.length; i++) {
    cir[i].index = i;
    cir[i].onclick = function() {
        circle_coun = this.index;
        img_coun = this.index;
        for (var i = 0; i < cir.length; i++) {
            cir[i].className = "with_list1";
        }
        this.className = "with_list1 with_list1_1";
        var a = img_coun * -1200;
        moveanimation3(with_oUl, a);
    }
}

you_list.onclick = function() {
    img_coun++;
    circle_coun++;
    if (img_coun > 3) {
        with_oUl.style.left = 0;
        img_coun = 1;
    }
    if (circle_coun > 2) {
        circle_coun = 0;
    }
    for (var i = 0; i < cir.length; i++) {
        cir[i].className = "with_list1";
    }
    cir[circle_coun].className = "with_list1 with_list1_1";
    var a = img_coun * -1200;
    moveanimation3(with_oUl, a);
}
zuo_list.onclick = function() {
    img_coun--;
    circle_coun--;
    if (img_coun < 0) {
        with_oUl.style.right = 0;
        img_coun = 2;
    }
    if (circle_coun < 0) {
        with_oUl.style.right = 0;
        circle_coun = 2;
    }
    console.log(circle_coun)
    console.log(img_coun)
    for (var i = 0; i < cir.length; i++) {
        cir[i].className = "with_list1";
    }
    cir[circle_coun].className = "with_list1 with_list1_1";
    var a = img_coun * -1200;
    moveanimation3(with_oUl, a);
}



//楼层导航
var num = $(".g_hot").offset().top;
var num1 = $(".flagship").offset().top;
var num2 = $(".cook1").offset().top;
var num3 = $(".cook2").offset().top;
var num4 = $(".cook3").offset().top;
var num5 = $(".cook4").offset().top;
var num6 = $(".cook5").offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > 0 && $(window).scrollTop() <= num) {
        $(".hot_nav_li").siblings().removeClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num && $(window).scrollTop() <= num1) {
        $(".hot_nav_li").eq(0).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(0).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num1 && $(window).scrollTop() <= num2) {
        $(".hot_nav_li").eq(1).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(1).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num2 && $(window).scrollTop() <= num3) {
        $(".hot_nav_li").eq(2).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(2).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num3 && $(window).scrollTop() <= num4) {
        $(".hot_nav_li").eq(3).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(3).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num4 && $(window).scrollTop() <= num5) {
        $(".hot_nav_li").eq(4).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(4).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num5 && $(window).scrollTop() <= num6) {
        $(".hot_nav_li").eq(5).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(5).addClass("hot_nav_li1");
    } else if ($(window).scrollTop() > num6) {
        $(".hot_nav_li").eq(6).siblings().removeClass("hot_nav_li1");
        $(".hot_nav_li").eq(6).addClass("hot_nav_li1");
    }
})
$(window).scroll(function() {
        if ($(window).scrollTop() >= num) {
            $(".hot_nav").fadeIn(1000)
        } else {
            $(".hot_nav").fadeOut(1000)
        }
    })
    //点击跳转
$(".hot_nav_li").eq(0).click(function() {
    $(window).scrollTop(num + 10)
})
$(".hot_nav_li").eq(1).click(function() {
    $(window).scrollTop(num1 + 10)
})
$(".hot_nav_li").eq(2).click(function() {
    $(window).scrollTop(num2 + 10)
})
$(".hot_nav_li").eq(3).click(function() {
    $(window).scrollTop(num3 + 10)
})
$(".hot_nav_li").eq(4).click(function() {
    $(window).scrollTop(num4 + 10)
})
$(".hot_nav_li").eq(5).click(function() {
    $(window).scrollTop(num5 + 10)
})
$(".hot_nav_li").eq(6).click(function() {
        $(window).scrollTop(num6 + 10)
    })
    // 回到顶部
$(".hot_top").click(function() {
    $(window).scrollTop(0);
})