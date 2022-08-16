//轮播图
function moveanimation2(ele, bourn) {
    // 每次执行前先清除上一次的定时器
    clearInterval(ele.inte);

    ele.inte = setInterval(function() {

        if (ele.offsetLeft == bourn) {
            clearInterval(ele.inte);
        } else {
            // 当每次步长凑不到一个整数的时候
            var lis = (bourn - ele.offsetLeft) / 1;
            lis = (lis > 0) ? Math.ceil(lis) : Math.floor(lis);
            ele.style.left = ele.offsetLeft + lis + "px";
        }

    }, 40)
}

//焦点 轮播
function moveanimation3(ele, bourn) {
    // 每次执行前先清除上一次的定时器
    clearInterval(ele.inte);

    ele.inte = setInterval(function() {

        if (ele.offsetLeft == bourn) {
            clearInterval(ele.inte);
        } else {
            // 当每次步长凑不到一个整数的时候
            var lis = (bourn - ele.offsetLeft) / 5;
            lis = (lis > 0) ? Math.ceil(lis) : Math.floor(lis);
            ele.style.left = ele.offsetLeft + lis + "px";
        }

    }, 40)
}


//厨房电器  tab切换
function tab(list, content) {
    for (var i = 0; i < list.length; i++) {
        list[i].index = i,
            list[i].onmouseover = function() {
                for (var i = 0; i < list.length; i++) {
                    list[i].style.border = "none";
                    content[i].style.display = "none";
                }
                this.style.border = "1px solid #2E84E9";
                this.style.borderBottom = "1px solid white";
                content[this.index].style.display = "block";
            }
    }
}