## 外观数列

给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let prevStr = '1'; //先定义上一个字符串为"1"
    for (let i = 1; i < n; i++) {
        //对n做一次循环
        let newStr = []; //新定义一个数组newStr
        let curStr = ''; //定义一个当前字符串curStr
        let count = 1; //一个当前字符串出现的次数
        for (let j = 0; j < prevStr.length; j++) {
            curStr = prevStr[j]; //当前字符
            if (prevStr[j] == prevStr[j + 1]) {
                //当重复出现时 count+=1
                count += 1;
            } else {
                //否则，计数中断，把count和curStr push到字符串数组里  并重置计数器
                newStr.push(`${count}${curStr}`);
                count = 1;
            }
        }
        prevStr = newStr.join('');
        //下一个字符串则为当前数组join后的结果
    }
    return prevStr;
};
```

