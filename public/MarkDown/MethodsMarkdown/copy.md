## 浅拷贝和深拷贝

#### 浅拷贝

```js
function copy(obj) {
  let result = {};
  for (let i in obj) {
    result[i] = obj[i];
  }
  return result;
}
```



#### 深拷贝

```js

function deepCopy(obj) {
  if (typeof obj == "object") {
    var result = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
      result[i] = typeof obj == "object" ? deepCopy(obj[i]) : obj[i];
    }
  } else result = obj;
  return result;
}
```

