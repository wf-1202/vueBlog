## 防抖和节流

#### 防抖

```js
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}
```



#### 节流

```js
function throttle(fn, delay) {
  let isRun = true;
  return function () {
    if (!isRun) { // fn在执行，不再触发方法
      return;
    }
    isRun = false;
    setTimeout(() => {
      fn();
      isRun = true; // fn执行完毕，可以再次执行
    }, delay);
  };
}
```

