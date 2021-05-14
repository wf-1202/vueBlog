<template>
  <div class="home-page">
    <div class="nav">
      <router-link to="/vue">Vue</router-link>
      <router-link to="/react">React</router-link>
      <router-link to="/wx">Mini Program</router-link>
      <router-link to="/css">CSS</router-link>
      <router-link to="/question">Question</router-link>
      <router-link to="/methods">Methods</router-link>
      <router-link to="/leetCode">LeetCode</router-link>
    </div>
    <div class="body">
      <div class="banner-wrap">
        <el-carousel
          :interval="8000"
          :height="bannerHeight"
          :arrow="arrow"
          :indicator-position="indicatorPosition"
        >
          <el-carousel-item v-for="(item, index) in imgList" :key="index">
            <img class="banner-img" :src="item.img" alt="index" />
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="search">
          <img
            class="searchIcon"
            src="../../assets/home/search.png"
            width="30px"
            height="30px"
            alt="搜索图标"
          />
          <input
            class="searchInput"
            type="text"
            placeholder="search..."
            v-model="keyword"
            @change="search"
          />
        </div> -->
      </div>
      <transition>
        <router-view />
      </transition>
      <Tools />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tools from "./Tools";
export default {
  name: "Home",
  components: {
    Tools
  },
  computed: {
    ...mapGetters({
      screenWidth: "getScreenWidth"
    }),
    bannerHeight() {
      return this.screenWidth >= 768 ? "500px" : "300px";
    },
    arrow() {
      return this.screenWidth >= 768 ? "always" : "never";
    },
    indicatorPosition() {
      return this.screenWidth >= 768 ? "" : "none";
    }
  },
  data() {
    return {
      keyword: "",
      currentPage: "vue", // 当前所在页
      imgList: [
        {
          img: require("../../assets/home/banner1.jpg")
        },
        {
          img: require("../../assets/home/banner2.jpg")
        },
        {
          img: require("../../assets/home/banner3.jpg")
        }
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log("to:", to);
      console.log("from:", from);
      switch (to.name) {
        case "Vue":
          this.currentPage = "vue";
          break;
        case "React":
          this.currentPage = "react";
          break;
        case "Wx":
          this.currentPage = "wx";
          break;
        case "Css":
          this.currentPage = "css";
          break;
        case "Question":
          this.currentPage = "question";
          break;
        case "Methods":
          this.currentPage = "methods";
          break;
      }
      console.log("当前页面：", this.currentPage);
    }
  },
  methods: {
    search() {
      console.log("搜索的关键字：", this.keyword);
      console.log("当前页面：", this.currentPage);
    },
    goRouter() {
      this.$router.push("/friend");
    }
  }
};
</script>

<style scoped lang="scss">
.home-page {
  background-color: #f6f6f6;
  animation: appear 0.5s linear;
  .nav {
    padding: 20px;
    a {
      display: inline-block;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #2c3e50;
      padding: 0 5%;
      text-decoration: none;
      &.router-link-exact-active {
        color: #58bcb3;
      }
    }
  }
  .body {
    padding: 0 10%;
  }
  .banner-wrap {
    box-sizing: border-box;
    width: 100%;
    /*height: 500px;*/
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    .banner-img {
      width: 100%;
      // height: 500px;
    }
  }
  .swiper {
    width: 100%;
  }
  .search {
    display: flex;
    align-items: center;
    max-width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 66;
    .searchIcon {
      margin-right: -45px;
      z-index: 66;
    }
    .searchInput {
      width: 500px;
      height: 50px;
      border-radius: 40px;
      padding-left: 50px;
      border: none;
      outline: none; /* 去除外边框  */
      font-size: 16px;
      color: #666;
    }
  }
}
@media only screen and (max-width: 768px) {
  /* 小于768px时 */
  .body {
    padding: 0 !important;
  }
  /* banner */
  .el-carousel {
    height: 300px !important;
  }
  .banner-img {
    // banner图片
    height: 300px !important;
  }
  /* 搜索框 */
  .searchInput {
    height: 40px !important;
  }
}
</style>
