## 远程仓库代码更新，拉取到本地git命令

##### 场景：github fork别人仓库分支下的代码。远程仓库更新后，自己本地代码更新。

```js
git remote add upstream 主仓库地址 // 增加远程仓库地址
git fetch upstream // 拉取代码
git merge upstream/master // 合并到本地
```

