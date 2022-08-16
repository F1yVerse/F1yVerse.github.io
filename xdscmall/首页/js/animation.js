function moveanimation1(ele, bourn) {
    // 每次执行前先清除上一次的定时器
    clearInterval(ele.inte);

    ele.inte = setInterval(function() {

        if (ele.offsetLeft > bourn) {
            // 判断向左走
            if (ele.offsetLeft <= bourn) {
                clearInterval(ele.inte);
            } else {
                // 当每次步长凑不到一个整数的时候
                var lis = (ele.offsetLeft - 13 < bourn) ? bourn : ele.offsetLeft - 13;
                ele.style.left = lis + "px";
            }

        } else if (ele.offsetLeft < bourn) {
            // 判断向右走
            if (ele.offsetLeft >= bourn) {
                clearInterval(ele.inte);
            } else {
                var lis = (ele.offsetLeft - 13 > bourn) ? bourn : ele.offsetLeft + 13;
                ele.style.left = lis + "px";
            }
        }

    }, 40)
}


function moveanimation2(ele, bourn) {
    // 每次执行前先清除上一次的定时器
    clearInterval(ele.inte);

    ele.inte = setInterval(function() {

        if (ele.offsetLeft == bourn) {
            clearInterval(ele.inte);
        } else {
            // 当每次步长凑不到一个整数的时候
            var lis = (bourn - ele.offsetLeft) / 10;
            lis = (lis > 0) ? Math.ceil(lis) : Math.floor(lis);
            ele.style.left = ele.offsetLeft + lis + "px";
        }

    }, 1)
}