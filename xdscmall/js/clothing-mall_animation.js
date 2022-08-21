// 匀速动画
function animationFun1(ele, target) {
    // 先清除另外一个方向的定时器
    clearInterval(ele.interId);
    // 把定时器的id设置到DOM元素上
    ele.interId = setInterval(function() {
        // 当到达目标时,进行清除定时器
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
            // 向右走
        } else if (ele.offsetLeft < target) {
            var dis = (ele.offsetLeft + 13) > target ? target : (ele.offsetLeft + 13);
            ele.style.left = dis + 'px';
            // 向左走
        } else if (ele.offsetLeft > target) {
            var dis = (ele.offsetLeft - 13) < target ? target : (ele.offsetLeft - 13);
            ele.style.left = dis + 'px';
        };
    }, 50);
};
// 缓慢动画
function animationFun2(ele, target) {
    // 先清除另外一个方向的定时器
    clearInterval(ele.interId);
    // 把定时器的id设置到DOM元素上
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            var step = (target - ele.offsetLeft) / 10;
            // 当step为小数时,进行上下取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            ele.style.left = ele.offsetLeft + step + 'px';
        }
    }, 20);
};