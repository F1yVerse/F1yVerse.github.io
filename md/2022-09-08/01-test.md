# CSS 选择器

1. 通配符选择器.
2. 标签选择器.
3. 类选择器.
4. ID 选择器.
5. 后代选择器.
6. 直接后代选择器.
7. 相邻兄弟选择器.
8. 属性选择器.
9. 关系选择器.
10. nth-child();
11. first-child();
12. last-child();
13. nth-of-type();
14. first-of-type();
15. last-of-type();

# 让一个盒子垂直居中的方法

1. 父元素相对定位, 子元素绝对定位, `top` 设为 `50%`, 修改子元素 `margin-top` 为负的自身 `height` 的一半.

```css
.father {
  width: 500px;
  height: 500px;
  position: relative;
}
.son {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  margin-top: -100px;
}
```

2. 父元素相对定位, 子元素绝对定位, `top` 设为 `50%`, 修改子元素 `transform: translateY(-50%)`.

```css
.father {
  width: 500px;
  height: 500px;
  position: relative;
}
.son {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

3. 父元素设为弹性盒子, 设定父元素的 `align-items: center`.

```css
.father {
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
}
.son {
  width: 200px;
  height: 200px;
}
```

# 数组去重并排序

```js
let arr = [7, 3, 5, 5, 6, 0, 8, 7, 3, 5, 5, 6, 0, 8];
let newArr = Array.from([...new Set(arr)]).sort((a, b) => a - b);
```

# 说一下冒泡排序原理, for 循环排序

> 外层循环控制轮次, 内层循环进行比较, 内层循环中依次进行比较, 将最大值使用解构赋值进行调换, 外层每执行一次, 就能找出一个最大值并调换至数组末尾, 这样循环结束就可以

```js
let arr = [11, 28, 21, 6, 4, 16, 13, 26];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
```

# ES6 新特性

1. let, const.
2. 解构赋值.
3. 拓展运算符.
4. 基本数据类型 Symbol.
5. Map, Set 对象.
6. Proxy 代理, Reflect 映射.
7. 模板字符串.
8. 箭头函数.
9. 迭代器: iterator.
10. 用于异步处理: Promise, async + await.
11. 模块化: export, import.

# var, let, const 三者区别

1. var 声明的是全局作用域或是所在函数的局部作用域内的变量, var 存在声明提升.
2. let 声明的是变量, 只在其所在的块级作用域中有效, 声明的变量不可被重新声明.
3. const 声明的是常量, 初始化后不可以被重新赋值.

# for 循环内部使用 var 和 let 声明变量, 循环体外 log 出什么结果, var 的声明提升等等怎么一回事

# 深拷贝和浅拷贝的区别

1. 浅拷贝复制的其实是指向某个对象的指针, 而不是对象本身, 新旧对象共享同一块内存, 我们一般的都会用 Object.assign()方法进行浅拷贝, 拷贝的是对象属性的引用, 而不是对象本身.
2. 深拷贝是创建了一个一模一样的对象, 跟原对象不共享内存, 修改新对象不会印象源对象, 我们可以现将对象使用 JSON.stringfy()转为 JSON 字符串, 再用 JSON.parse()转为对象, 这样就深拷贝出一个新对象了, 这个新对象会开辟新的栈. 当然, 也可以用手写递归的方式深拷贝, 遍历对象或数组的每一项, 直到每一项都是基本数据类型, 再进行复制.

# 如何用递归实现深拷贝

```js
function deepCopy(target) {
  // 当检测目标为 基本数据类型、function、Date、RegExp 时，直接返回（首次判断及递归时的拦截）
  if (
    typeof target !== "object" ||
    target === null ||
    target instanceof Date ||
    target instanceof RegExp
  ) {
    return target;
  }
  // 判断目标时数组还是对象
  const newTarget = Array.isArray(target) ? [] : {};
  // 遍历对象（数组则遍历下标）将引用类型递归遍历，基本类型直接赋值到新对象（数组）的对应的键上
  Object.keys(target).forEach(
    (key) =>
      (newTarget[key] =
        target[key] instanceof Object ? deepCopy(target[key]) : target[key])
  );
  // 返回深拷贝后的对象
  return newTarget;
}
```

# GIT 怎么用

1. 提交文件至暂存区 `git add <filename>`, 将所有文件提交至暂存区 `git add .`.
2. 提交暂存区的文件至本地仓库 `git commit -m <msg>`.
3. 提交到远程仓库 `git push <url> <branch>`.
4. 拉取远程仓库 `git pull <url> <branch>`.
5. 拉取远程仓库 `git pull <url> <branch>`
6. 克隆远程仓库 `git clone <url>`.
7. 创建分支 `git branch <name>`.
8. 切换分支 `git checkout <name>`.
9. 合并分支 `git merge`.
10. 合并多个 commit `git rebase`.
11. 将本地修改内容提交至栈区 `git stash`.
12. 将栈区代码拿出 `git stash pop`.

# Object.definePropoty(); 介绍一下

1. 传入三个参数, `obj`, `prop`, `descriptor`
2. 在参数`descriptor`中, 可以定义值, 是否可枚举, 可配置, 可修改等等

```js
let obj = {};
Object.defineProperty(obj, "name", {
  // 值
  value: "F1yVerse",
  // 是否可枚举
  enumerable: true,
  // 是否可配置
  configurable: true,
  // 是否可以修改
  writable: true,
});
console.log(obj); // { name: 'F1yVerse' }
```

# 三种存储方式的介绍, 以及能存储的大小

> 在 H5 中, 加入了 localStorage 和 sessionStorage 本地存储, 通常情况下, 两者存储空间均为 5m, 使用 setItem 和 getItem 进行值的定义和获取, 数据用键值对的模式, 键和值只能是字符串. localStorage 和 sessionStorage 解决了 cookie 存储空间不足的问题(每条 cookie 存储空间为 4K).

1. localStorage 数据永久有效, 只有手动清除时才会被清除.
2. sessionStorage 数据值存在于当前会话, 关闭浏览器或页面时就会被清除.
3. cookie http 用来和服务器通讯, 请求时需要发送到服务器, 只能用`document.cookie`来修改
