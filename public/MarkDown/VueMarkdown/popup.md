## 监听物理返回

```javascript
// mounted中监听popstate
mounted() {
    window.addEventListener("popstate", this.judgeBack, false);
}

// 需要物理返回的操作 例：弹框需要的操作
if (this.showSearchPop) {
    this.showSearchPop = false;
}
if (this.showPop && (this.showCustomStartPop || this.showCustomEndPop)) {
    this.showCustomStartPop = false;
    this.showCustomEndPop = false;
} else {
    if (this.showPop) {
        this.showPop = false;
    }
}
if (this.showWarnPop) {
    this.showWarnPop = false;
}
}

// 页面销毁移除监听事件。
destroyed() {
    window.removeEventListener("popstate", this.judgeBack, false);
}
```

