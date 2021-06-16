## 手写Call，Apply，Bind

#### Call

```js
Function.prototype.call = funciton(context, ...args) {
  context = context || window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = this
  context[fnSymbol](...args)
  delete context[fnSymbol]
}
```



#### Apply

```js
Function.prototype.call = funciton(context, argsArr) {
  context = context || window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = this
  context[fnSymbol](...argsArr)
  delete context[fnSymbol]
}
```



#### Bind

```js
Function.prototype.call = function(context, ...args) {
  context = context || window
  const fnSymbol = Symbol('fn')
  context[fnSymbol] = this
  return function(..._args) {
  args = args.concat(..._args)
  context[fnSymbol](..args)
  delete context [fnSymbol]
  }
}
```

