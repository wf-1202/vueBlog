export const ellipsis = {
  text:
    "## 多行省略代码（不知道为啥，一直没记住，用到就复制~）\n" +
    `      overflow: hidden;
      text-overflow: ellipsis; /*文本溢出时显示省略标记*/
      display: -webkit-inline-box; /*设置弹性盒模型*/
      -webkit-line-clamp: 1; /*文本占的行数,如果要设置2行加...则设置为2*/
      -webkit-box-orient: vertical; /*子代元素垂直显示*/`
};
export const bgurl = {
  text:
    "## 图片背景大小调整\n" +
    `    background: url();
    background-size: 100% 100%;`
};
export const scrollBar = {
  text:
    "## 修改滚动条样式\n" +
    `    div::-webkit-scrollbar {
        display: none;
    }
    div::-webkit-scrollbar 滚动条整体部分 
    div::-webkit-scrollbar-thumb滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条
    div::-webkit-scrollbar-track 滚动条的轨道（里面装有 Thumb
    div::-webkit-scrollbar-button滚动条的轨道的两端按钮，允许通过点击微调小方块的位置
    div::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去
    div::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
    div::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件注意此方案有兼容性问题，一般需要隐藏滚动条时我都是用一个色块通过定位盖上去，或者将子级元素调大，父级元素使用
    overflow-hidden 截掉滚动条部分。暴力且直接。`
};
export const hide = {
  text:
    "## 隐藏页面元素\n" +
    `    display-none: 元素不存在，从 dom 中删除
    opacity-0: 元素透明度将为 0，但元素仍然存在，绑定的事件仍旧有效仍可触发执行。
    visibility-hidden：元素隐藏，但元素仍旧存在，页面中无法触发该元素的事件。`
};
