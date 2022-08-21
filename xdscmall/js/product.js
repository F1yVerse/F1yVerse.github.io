var smbox = document.getElementsByClassName("pro_img")[0];
var smbox_fdj = document.getElementsByClassName("pro_fdj")[0];
var bigbox = document.getElementsByClassName("pro_fda")[0];
var bigimg = document.getElementsByClassName("bigimg")[0];
var pro = document.getElementsByClassName("pro")[0];
smbox.onmouseover = function () {
  smbox_fdj.style.display = "block";
  bigbox.style.display = "block";
};
smbox.onmouseout = function () {
  smbox_fdj.style.display = "none";
  bigbox.style.display = "none";
};
smbox.onmousemove = function (e) {
  var minX = e.pageX - pro.offsetLeft - smbox_fdj.offsetWidth / 2;
  var minY = e.pageY - pro.offsetTop - smbox_fdj.offsetHeight / 2;
  var maxydX = smbox.offsetWidth - smbox_fdj.offsetWidth;
  var maxydY = smbox.offsetHeight - smbox_fdj.offsetHeight;

  if (minX > maxydX) {
    minX = maxydX;
  } else if (minX < 0) {
    minX = 0;
  }
  if (minY > maxydY) {
    minY = maxydY;
  } else if (minY < 0) {
    minY = 0;
  }
  smbox_fdj.style.top = minY + "px";
  smbox_fdj.style.left = minX + "px";
  var biliX = minX / maxydX;
  var biliY = minY / maxydY;
  bigimg.style.top =
    -(biliY * (bigimg.offsetHeight - bigbox.offsetHeight)) + "px";
  bigimg.style.left =
    -(biliX * (bigimg.offsetWidth - bigbox.offsetWidth)) + "px";
};

var shangpin = decodeURI(location.search);
var objA = shangpin.split("?")[1].split("&");
var resObj = {};
$.each(objA, function (ind, val) {
  resObj[val.split("=")[0]] = val.split("=")[1];
});
console.log(resObj);
$(".wrap .name").text(resObj.name);
$(".sum_price").text(resObj.print);
if (!resObj.img.includes(",")) {
  console.log("字符串");
  $(".pro_p .pro_img img").prop({
    src: resObj.img,
  });
  $(".pro_p .pro_fda img").prop({
    src: resObj.img,
  });
  // 不是数组
  var str = `
  <li class="li_img">
  <a href="#" target="_blank">
    <img
      src="${resObj.img}"
      alt=""
      tag="big"
    />
  </a>
</li>
  `;
  $(str).appendTo($(".ul_img"));
} else {
  console.log("数组");
  var imgArr = resObj.img.split(",");
  $(".pro_p .pro_img img").prop({
    src: imgArr[0],
  });
  $(".pro_p .pro_fda img").prop({
    src: imgArr[0],
  });
  $.each(imgArr, function (ind, val) {
    var str = `
  <li class="li_img">
    <a href="#" target="_blank">
        <img
        src="${val}"
        alt=""
        tag="big"
        />
    </a>
  </li>
  `;
    $(str).appendTo($(".ul_img"));
  });
}
var aa = 0;
$(".left").click(function () {
  if (aa > -90) {
    aa -= 20;
    $(".list_img>ul").css("left", aa);
  } else {
    $(".list_img>ul").css("left", -90);
  }
});
$(".right").click(function () {
  if (aa < 0) {
    aa += 20;
    $(".list_img>ul").css("left", aa);
  } else {
    $(".list_img>ul").css("left", 0);
  }
});
$(".one ul li").click(function () {
  $(this).addClass("on");
  $(this).siblings().removeClass("on");
  var index = $(this).index();
  $(".box").eq(index).addClass("box1").siblings().removeClass("box1");
});
$(".tit li").click(function () {
  $(this).addClass("tit_li");
  $(this).siblings().removeClass("tit_li");
});
$(".tit li").click(function () {
  $(this).addClass("tit_li");
  $(this).siblings().removeClass("tit_li");
  var index = $(this).index();
  $(".new_mo").eq(index).addClass("new_moa").siblings().removeClass("new_moa");
});
$(".pro_img>img");

$(".ul_img li a img").mouseover(function () {
  var aa = $(this).attr("src");
  $(".pro_img img").attr("src", aa);
  $(".pro_fda img").attr("src", aa);
});
