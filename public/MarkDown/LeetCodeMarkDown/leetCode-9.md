## 回文数

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let a = String(x).split(""); // 数字类型转字符串，并转为数组
    let b = a.reverse().join("") // 数组翻转，转为字符串
    if (b == x) {
        return true
    } else {
        return false
    }
};
```

