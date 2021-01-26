## 监听页面滚动

```javascript
window.addEventListener("scroll", () => {
    let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    console.log(top);
});
```

