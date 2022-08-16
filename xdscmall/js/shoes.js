// swiper处理
var mySwiper = new Swiper(".swiper", {
  // direction: "vertical", // 垂直切换选项
  loop: true, // 循环模式选项
  // 如果需要分页器
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 如果需要滚动条
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
// nav滑动处理
$(".nav-btn").hover(
  function () {
    $(this)
      .children()
      .stop()
      .show(0, "linear", function () {});
    $(".block").css({
      left: $(this).position().left + 50,
      display: "block",
      "background-color": "#fff",
    });
  },
  function () {
    $(this)
      .children()
      .stop()
      .hide(0, "linear", function () {});
    $(".block").css({
      display: "none",
    });
  }
);
// 热销/促销切换处理
$(".toprank-container .hd ul li").mouseover(function () {
  $(this).addClass("active").siblings().removeClass("active");
  console.log($(this).text());
  if ($(this).text() === "促销榜") {
    $(".toprank-container .bd1")
      .stop()
      .fadeOut(function () {})
      .siblings()
      .stop()
      .fadeIn(function () {});
  } else {
    $(".toprank-container .bd2")
      .stop()
      .fadeOut(function () {})
      .siblings()
      .stop()
      .fadeIn(function () {});
  }
});
$.each(obj.shoes.rexiao, function (ind, ele) {
  $(
    `
    <div class="item">
    <a class="image" href="javascript:;">
    <img src="${ele.imgUrl}" alt="" />
  </a>
  <div class="det">
  <a href="javascript:;" class="name">${ele.name}</a>
    <p class="price">${ele.price}</p>
  </div>
</div>
  `
  ).appendTo($(".toprank-container .bd1"));
});
$.each(obj.shoes.cuxiao, function (ind, ele) {
  $(
    `
    <div class="item">
    <a class="image" href="javascript:;">
    <img src="${ele.imgUrl}" alt="" />
  </a>
  <div class="det">
  <a href="javascript:;" class="name">${ele.name}</a>
    <p class="price">${ele.price}</p>
  </div>
</div>
  `
  ).appendTo($(".toprank-container .bd2"));
});
// 今日推荐商品渲染
$.each(obj.shoes.recToday, function (ind, ele) {
  console.log(ele);
  $(
    `
    <div class="item">
      <a class="image" href="javascript:;">
        <div class="img">
          <img src="${ele.imgUrl}" alt="" />
        </div>
      </a>
      <a class="name" href="javascript:;">${ele.name}</a>
      <p class="price">${ele.price}</p>
  </div>
  `
  ).appendTo($(".rec-today-container .main"));
});
// 新品到货商品渲染
$.each(obj.shoes.newPic, function (ind, ele) {
  console.log(ele);
  $(
    `
    <div class="item">
      <a class="image" href="javascript:;">
        <div class="img">
          <img src="${ele.imgUrl}" alt="" />
        </div>
      </a>
      <a class="name" href="javascript:;">${ele.name}</a>
      <p class="price">${ele.price}</p>
  </div>
  `
  ).appendTo($(".new-pic-container .main"));
});
// 浏览记录商品渲染
$.each(obj.shoes.history, function (ind, ele) {
  console.log(ele);
  $(
    `
    <div class="item">
    <div class="image">
      <img src="${ele.imgUrl}" alt="" />
    </div>
    <p class="price">${ele.price}</p>
    <p class="name">
      <a href="javascript:;">${ele.name}</a>
    </p>
    <a href="javascript:;" class="btn">查看详情</a>
  </div>
  `
  ).appendTo($(".atwillgo-container .main"));
});
