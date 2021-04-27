## 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 “ ”。

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    let first = strs[0] // 取出第一个字符串
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(first) != 0) { // 循环直到找出公共部分
            first = first.substring(0, first.length - 1) // 没有找到公共部分，则长度减一，继续循环匹配。
        }
    }
    return first
};
```

