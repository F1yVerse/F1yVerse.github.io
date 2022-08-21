var oUl = document.getElementsByClassName("oUl")[0];
// var last = document.getElementsByClassName("last")[0];
// var next = document.getElementsByClassName("next")[0];
var circle = document.getElementsByClassName("circle");
var lunbo_1 = document.getElementsByClassName("lunbo_1")[0];

var img_counter = 0;
var circle_counter = 0;

for (var i = 0; i < circle.length; i++) {
  circle[i].index = i;

  circle[i].onmousemove = function () {
    circle_counter = this.index;
    img_counter = this.index;

    for (var i = 0; i < circle.length; i++) {
      circle[i].className = "circle"; // 快捷方便的设置dom元素的class名字
    }

    this.className = "circle red";
    var a = img_counter * -1200;
    moveanimation2(oUl, a);
  };
}

autoplay();

// 自动轮播

function autoplay() {
  oUl.auto = setInterval(function () {
    img_counter++;
    circle_counter++;

    if (img_counter > 3) {
      oUl.style.left = 0;
      img_counter = 1;
    }

    if (circle_counter > 2) {
      circle_counter = 0;
    }

    for (var i = 0; i < circle.length; i++) {
      circle[i].className = "circle"; // 快捷方便的设置dom元素的class名字
    }

    circle[circle_counter].className = "circle red";
    // console.log(img_counter);
    var a = img_counter * -1200;
    moveanimation2(oUl, a);
  }, 4000);
}

var oUl_1 = document.getElementsByClassName("oUl_1")[0];
var last1 = document.getElementsByClassName("last1")[0];
var next1 = document.getElementsByClassName("next1")[0];
var circle1 = document.getElementsByClassName("circle1");
var lunbo_2 = document.getElementsByClassName("lunbo_2")[0];

var img_counter1 = 0;
var circle_counter1 = 0;

for (var i = 0; i < circle1.length; i++) {
  circle1[i].index = i;

  circle1[i].onmousemove = function () {
    circle_counter1 = this.index;
    img_counter1 = this.index;

    for (var i = 0; i < circle1.length; i++) {
      circle1[i].className = "circle1"; // 快捷方便的设置dom元素的class名字
    }
    this.className = "circle1 red";
    var a = img_counter1 * -600;
    moveanimation2(oUl_1, a);
  };
}

autoplay1();
// 自动轮播

function autoplay1() {
  oUl_1.auto = setInterval(function () {
    img_counter1++;
    circle_counter1++;

    if (img_counter1 > 3) {
      oUl_1.style.left = 0;
      img_counter1 = 1;
    }

    if (circle_counter1 > 2) {
      circle_counter1 = 0;
    }

    for (var i = 0; i < circle1.length; i++) {
      circle1[i].className = "circle1"; // 快捷方便的设置dom元素的class名字
    }

    circle1[circle_counter1].className = "circle1 red";
    // console.log(img_counter1);
    var a = img_counter1 * -600;
    moveanimation2(oUl_1, a);
  }, 4000);
}
$(".header-links ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
