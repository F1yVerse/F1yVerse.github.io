// 右边栏隐藏函数
$("i.close").click(function () {
  $(this)
    .parent()
    .hide(250, function () {
      $(this).remove();
    });
});
// 热门推荐商品渲染
$.each(obj.cosmetic.tuijian, function (ind, ele) {
  console.log(ele);
  $(`
    <div class="item">
      <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">
        <div class="image">
          <img src="${ele.imgUrl}" alt="" />
        </div>
      </a>
      <div class="detail">
        <a class="name" href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">${ele.name}</a>
        <p class="price">${ele.price}</p>
        <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}" class="buy">立即购买</a>
      </div>
    </div>
  `).appendTo($(".hot-sales .container"));
});
// 默认商品小图标点击事件
$(".commodities-container .left").on("mouseover", ".small .box", function () {
  var bigImg = $(this).parent().parent().prev().children().children();
  var smallImg = $(this).children();
  bigImg.prop({
    src: smallImg.prop("src"),
  });
});
// 默认商品渲染
$.each(obj.cosmetic.default, function (ind, ele) {
  var str = ``;
  $.each(ele.imgUrl, function (ind, ele) {
    console.log(ele);
    str += `<div class="small">
       <div class="box">
         <img src="${ele}" alt="" />
       </div>
     </div>`;
  });
  // console.log(str);
  console.log(ele);
  var res =
    ` <div class="good">
      <div class="con">
        <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">
          <div class="image">
            <img src="${ele.imgUrl[0]}" alt="" />
          </div>
        </a>
        <div class="sider">` +
    str +
    ` </div>
        <p class="price">
          <span class="pri">${ele.price}</span>
          <span class="sold">已售${ele.soldNum}件</span>
        </p>
        <p class="p-name">
          <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}"
            >${ele.name}</a
          >
        </p>
        <p class="p-store">
          <a href="javascript:;">${ele.store}</a>
          <i class="iconfont icon-customerservice-fill"></i>
        </p>
        <div class="label-list"></div>
        <div class="p-operate">
          <div class="diff">
            <i class="iconfont icon-block"></i>
            对比
          </div>
          <div class="collect">
            <i class="iconfont icon-heart"></i>
            收藏
          </div>
          <div class="cart">
            <i class="iconfont icon-gift"></i>
            加入购物车
          </div>
        </div>
      </div>
    </div>`;
  console.log(res);
  $(res).appendTo($(".commodities-container .left"));
});
// 推广商品渲染
$.each(obj.cosmetic.tuiguang, function (ind, ele) {
  console.log(ele);
  $(`<div class="good">
      <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">
        <div class="image">
          <img src="${ele.imgUrl}" alt="" />
        </div>
      </a>
      <p class="price">${ele.price}</p>
      <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}" class="p-name"
        >${ele.name}</a
      >
      <p class="soldout">已售1件</p>
  </div>`).appendTo($(".commodities-container .right .goods"));
});
// 猜你喜欢商品渲染
$.each(obj.cosmetic.guess, function (ind, ele) {
  $(
    ` <div class="good">
    <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">
    <div class="image">
    <img src="${ele.imgUrl}" alt="" />
    </div>
    </a>
    <p class="price">${ele.price}</p>
    <div class="p-name">
    <a href="./product.html?name=${ele.name}&print=${ele.price}&img=${ele.imgUrl}">${ele.name}</a>
    </div>
    <div class="p-num">售出${ele.soldNum}件</div>
    </div>`
  ).appendTo($(".guess-container .goods"));
});

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
