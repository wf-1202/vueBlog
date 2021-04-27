## 整数翻转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = []
    let str = x.toString() // 数字类型转换为字符串
    if (x === 0) {
        return 0
    }
    // 如果是负数
    if (str.includes('-')) {
        let newStr = str.substr(1) // 截取负号之后
        arr = newStr.split('') // 字符串转数组
        if (str < -Math.pow(2, 31)) {
            return 0
        }
        let result = arr.reverse().join('') // 数组倒转，转为字符串
        if (-result < -Math.pow(2, 31)) {
            return 0
        }
        return '-' + result
    } else {
        arr = str.split('').reverse()
        if (str > Math.pow(2, 31) - 1 || arr.join('') > Math.pow(2, 31) - 1) {
            return 0
        }
        if (arr[0] === 0) {
            return arr.shift().join('')
        }
        return arr.join('')
    }
};
```

