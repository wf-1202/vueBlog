## 监听键盘弹起

```javascript
let height = document.body.clientHeight; // 页面高度
window.addEventListener("resize", function() {
    let rHeight = document.body.clientHeight;  // 弹起后重新获取页面高度。
    if (height - 110 > rHeight) {
        document.getElementById("footer").style.display = "none";
    } else {
        document.getElementById("footer").style.display = "block";
    }
});
```

