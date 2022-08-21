function moveanimation1(ele, bourn) {
  // 每次执行前先清除上一次的定时器
  clearInterval(ele.inte);

  ele.inte = setInterval(function () {
    if (ele.offsetLeft > bourn) {
      // 判断向左走
      if (ele.offsetLeft <= bourn) {
        clearInterval(ele.inte);
      } else {
        // 当每次步长凑不到一个整数的时候
        var lis = ele.offsetLeft - 13 < bourn ? bourn : ele.offsetLeft - 13;
        ele.style.left = lis + "px";
      }
    } else if (ele.offsetLeft < bourn) {
      // 判断向右走
      if (ele.offsetLeft >= bourn) {
        clearInterval(ele.inte);
      } else {
        var lis = ele.offsetLeft - 13 > bourn ? bourn : ele.offsetLeft + 13;
        ele.style.left = lis + "px";
      }
    }
  }, 1);
}

function moveanimation2(ele, bourn) {
  // 每次执行前先清除上一次的定时器
  clearInterval(ele.inte);

  ele.inte = setInterval(function () {
    if (ele.offsetLeft == bourn) {
      clearInterval(ele.inte);
    } else {
      // 当每次步长凑不到一个整数的时候
      var lis = (bourn - ele.offsetLeft) / 10;
      lis = lis > 0 ? Math.ceil(lis) : Math.floor(lis);
      ele.style.left = ele.offsetLeft + lis + "px";
    }
  }, 40);
}

// function moveanimation(ele, bourn1) {
//     clearInterval(ele.inte);
//     ele.inte = setInterval(function() {
//         if (ele.offsetLeft > bourn1) {
//             if (ele.offsetLeft <= bourn1) {
//                 clearInterval(ele.inte);
//             } else {
//                 var lis = (ele.offsetLeft - 13 < bourn1) ? bourn1 : ele.offsetLeft - 13;
//                 // ele.style.left = ele.offsetLeft - 10 + "px";
//                 ele.style.left = lis + "px";
//             }
//         } else if (ele.offsetLeft < bourn1) {
//             if (ele.offsetLeft >= bourn1) {
//                 clearInterval(ele.inte);
//             } else {
//                 var lis = (ele.offsetLeft - 13 > bourn1) ? bourn1 : ele.offsetLeft + 13;
//                 // ele.style.left = ele.offsetLeft - 10 + "px";
//                 ele.style.left = lis + "px";
//                 // ele.style.left = ele.offsetLeft + 10 + "px";
//             }
//         }
//     }, 40)
// };

// function moveanimation1(ele, bourn) {
//     clearInterval(ele.bourn);
//     ele.inte = setInterval(function() {
//         if (ele.offsetLeft == bourn) {
//             clearInterval(ele.inte);
//         } else {
//             var lis = (bourn - ele.offsetLeft) / 10;
//             lis = (lis > 0) ? Math.ceil(lis) : Math.floor(lis);
//             ele.style.left = ele.offsetLeft + lis + "px";
//         }
//     }, 40)
// };
