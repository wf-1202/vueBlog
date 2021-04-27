const cssList = [
  {
    id: 1,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "多行省略",
    author: "wf",
    desc: "一直没记住~"
  },
  {
    id: 2,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "图片当背景时大小",
    author: "wf",
    desc: "调整宽高，并没有解决问题。"
  },
  {
    id: 3,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "滚动条样式",
    author: "wf",
    desc: "自定义滚动条。"
  },
  {
    id: 4,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "隐藏页面元素",
    author: "wf",
    desc: "隐藏页面元素的几种方式"
  },
  {
    id: 5,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "水滴效果",
    author: "wf",
    desc: "动态水滴效果"
  },
  {
    id: 6,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "故障按钮",
    author: "wf",
    desc: "模仿2077网站上的按钮"
  },
  {
    id: 7,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "边框效果",
    author: "wf",
    desc: "边框效果学习"
  },
  {
    id: 8,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "range切换图片效果",
    author: "wf",
    desc: ""
  },
  {
    id: 9,
    type: "css",
    img: require("../assets/img/cssLogo.jpg"),
    title: "圆形线条倒数特效",
    author: "wf",
    desc: ""
  }
];
const methodList = [
  {
    id: 1,
    type: "method",
    img: require("../assets/img/methodLogo.png"),
    title: "storage方法",
    author: "wf",
    desc: "storage封装"
  }
];
const questionList = [
  {
    id: 1,
    type: "question",
    img: require("../assets/img/questionLogo.png"),
    title: "new Date()",
    author: "wf",
    desc: "new Date在安卓系统版本问题"
  },
  {
    id: 2,
    type: "question",
    img: require("../assets/img/questionLogo.png"),
    title: "滚动条",
    author: "wf",
    desc: "IOS 手机容器滚动条滑动不流畅"
  }
];
const reactList = [
  {
    id: 1,
    type: "react",
    img: require("../assets/img/reactLogo.jpg"),
    title: "组件+Hooks例子",
    author: "wf",
    desc: "记录下写法。"
  }
];
const vueList = [
  {
    id: 1,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "监听页面滚动",
    author: "wf",
    desc: "用于分页加载。相关滚动操作等"
  },
  {
    id: 2,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "监听物理返回",
    author: "wf",
    desc: "用于不和原生交互的情况下，H5控制物理返回"
  },
  {
    id: 3,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "监听键盘弹起",
    author: "wf",
    desc: "APP需要文本框输入，弹起键盘时，底部按钮会被顶起来。"
  },
  {
    id: 4,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "Vant组件CountDown",
    author: "wf",
    desc: "倒计时组件使用时遇到的问题"
  },
  {
    id: 5,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "花里胡哨的验证码",
    author: "wf",
    desc: ""
  },
  {
    id: 6,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "canvas手写签名 ",
    author: "wf",
    desc: "签名上传，回显"
  },
  {
    id: 7,
    type: "vue",
    img: require("../assets/img/vueLogo.jpg"),
    title: "路由问题 ",
    author: "wf",
    desc: "路由返回参数问题"
  }
];
const wxList = [
  {
    id: 1,
    type: "wx",
    img: require("../assets/img/wxLogo.jpg"),
    title: "日期选择组件",
    author: "wf",
    desc: "日期组件在IOS的显示问题。"
  },
  {
    id: 2,
    type: "wx",
    img: require("../assets/img/wxLogo.jpg"),
    title: "页面在IOS无法滚动问题",
    author: "wf",
    desc: "页面在安卓下，滚动部分正常。在IOS下滚动部分无法滚动。"
  }
];
const leetCodeList = [
  {
    id: 1,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #1",
    author: "wf",
    desc: "两数之和"
  },
  {
    id: 2,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #7",
    author: "wf",
    desc: "整数反转"
  },
  {
    id: 3,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #9",
    author: "wf",
    desc: "回文数"
  },
  {
    id: 4,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #14",
    author: "wf",
    desc: "最长公共前缀"
  },
  {
    id: 5,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #26",
    author: "wf",
    desc: "删除有序数组中的重复项"
  },
  {
    id: 6,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #27",
    author: "wf",
    desc: "移除元素"
  },
  {
    id: 7,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #28",
    author: "wf",
    desc: "实现 strStr()"
  },
  {
    id: 8,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #35",
    author: "wf",
    desc: "搜索插入位置"
  },
  {
    id: 9,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #38",
    author: "wf",
    desc: "两数之和"
  },
  {
    id: 10,
    type: "leetCode",
    img: require("../assets/img/leetCode.png"),
    title: "LeetCode #1",
    author: "wf",
    desc: "外观数列"
  }
];
export {
  cssList,
  methodList,
  questionList,
  reactList,
  vueList,
  wxList,
  leetCodeList
};
