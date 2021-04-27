<template>
  <div class="article">
    <div class="content" v-highlight v-html="text"></div>
    <A v-show="this.$route.query.id === 5 && this.$route.query.type == 'vue'"></A>
    <Sign v-show="this.$route.query.id === 6 && this.$route.query.type == 'vue'"></Sign>
    <WaterDrop
      v-show="this.$route.query.id === 5 && this.$route.query.type == 'css'"
    ></WaterDrop>
    <FaultButton
      v-show="this.$route.query.id === 6 && this.$route.query.type == 'css'"
    ></FaultButton>
    <BorderStyle
      v-show="this.$route.query.id === 7 && this.$route.query.type == 'css'"
    ></BorderStyle>
    <Range v-show="this.$route.query.id === 8 && this.$route.query.type == 'css'"></Range>
    <CountDown
      v-show="this.$route.query.id === 9 && this.$route.query.type == 'css'"
    ></CountDown>
    <div class="link">
      <div class="linkItem" @click="readArticle('last')">
        {{ "上一篇:" + lastArticle.title }}
      </div>
      <div class="linkItem right" @click="readArticle('next')">
        {{ "下一篇:" + nextArticle.title }}
      </div>
    </div>
  </div>
</template>

<script>
// 参考：https://github.com/showdownjs/showdown
import showdown from "showdown";
import axios from "axios";
import A from "./vue/a";
import Sign from "./vue/sign";
import {
  CSSMap,
  VueMap,
  ReactMap,
  WxMap,
  QuestionMap,
  MethodsMap,
  LeetCodeMap,
} from "@/common/dict.js";
import {
  cssList,
  methodList,
  questionList,
  reactList,
  vueList,
  wxList,
  leetCodeList,
} from "@/data/allData.js";
import BorderStyle from "./css/BorderStyle";
import CountDown from "./css/CountDown";
import FaultButton from "./css/FaultButton";
import Range from "./css/Range";
import WaterDrop from "./css/WaterDrop";

export default {
  name: "Article",
  components: {
    A,
    Sign,
    BorderStyle,
    CountDown,
    FaultButton,
    Range,
    WaterDrop,
  },
  watch: {
    $route(to, from) {
      // 1.监听路由，解决当组件初始化后，再次进入组件回到回到顶部
      // 2.点击上/下篇文章跳转时，通过监听路由，来达到url不变，参数改变时，页面数据重新请求
      this.getClassification();
      this.show();
      this.getArticleTitle();
      console.log("to:", to);
      console.log("文章详情...");
    },
  },
  data() {
    return {
      text: "",
      lastArticle: {
        id: "654321",
        title: "没有上一篇",
      },
      nextArticle: {
        id: "789456",
        title: "没有下一篇",
      },
      id: 0,
      articleData: {}, // 文章数据
      articleTitleList: [], // 获取文章标题
    };
  },
  mounted() {
    this.getClassification();
    this.show();
    this.getArticleTitle();
  },
  methods: {
    // 获取首页文章分类
    getClassification() {
      let type = this.$route.query.type;
      let list = {
        css: CSSMap,
        vue: VueMap,
        react: ReactMap,
        wx: WxMap,
        question: QuestionMap,
        method: MethodsMap,
        leetCode: LeetCodeMap,
      };
      // 获取markdown地址
      this.articleData = list[type][this.$route.query.id];
    },
    show() {
      // 拿到markdown数据
      let url = this.articleData;
      axios.get(url).then((res) => {
        if (res.status === 200) {
          this.getData(res.data);
        }
      });
    },
    // 获取文章标题，用于跳转上/下篇文章
    getArticleTitle() {
      let id = this.$route.query.id;
      let type = this.$route.query.type;
      let articleList = {
        css: cssList,
        vue: vueList,
        react: reactList,
        wx: wxList,
        question: questionList,
        method: methodList,
        leetCode: leetCodeList,
      };
      this.articleTitleList = articleList[type];
      this.articleTitleList.map((item, index) => {
        if (id == 1) {
          this.lastArticle.title = "没有上一篇";
          this.nextArticle.title = this.articleTitleList[1].title;
        } else if (id == this.articleTitleList.length) {
          this.lastArticle.title = this.articleTitleList[
            this.articleTitleList.length - 1
          ].title;
          this.nextArticle.title = "没有下一篇";
        } else {
          this.lastArticle.title = this.articleTitleList[id - 2].title;
          this.nextArticle.title = this.articleTitleList[id].title;
        }
      });
    },
    getData(type) {
      const markDownText = type;
      const converter = new showdown.Converter({
        parseImgDimensions: true, // 支持从markdown语法中设置图像尺寸
        simplifiedAutoLink: true, // 自动转为链接形式
        strikethrough: true, // 语法 ~~strikethrough~~ 解析为 <del>strikethrough</del>
        tables: true, // 转为表格
        tablesHeaderId: true,
        ghCodeBlocks: true, // 支持代码块格式
        splitAdjacentBlockquotes: true, // 拆分相邻块Quote块
        openLinksInNewWindow: true, // 链接到新窗口
        tasklists: true, // 支持任务列表
      });
      this.text = converter.makeHtml(markDownText);
    },
    readArticle(param) {
      let id = this.$route.query.id;
      let type = this.$route.query.type;
      if (id == 1 && param == "last") {
        return;
      } else if (id == this.articleTitleList.length && param == "next") {
        return;
      } else {
        param == "last" ? (id -= 1) : (id += 1);
        this.$router.push({
          path: "/zone/article",
          query: { id: id, type: type },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  background-color: #ffffff;
  padding-bottom: 10px;
  .content {
    background-color: #ffffff;
    padding: 40px;
  }
  .link {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding: 20px;
    .linkItem {
      width: 30%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        color: #58bcb3;
        cursor: pointer;
      }
    }
    .right {
      text-align: right;
    }
  }
}
</style>
