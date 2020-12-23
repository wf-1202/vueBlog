<template>
  <div id="app">
    <router-view />
    <ToTop></ToTop>
    <div class="copyRight">
      <div>京ICP备20016498号-1</div>
    </div>
  </div>
</template>
<script>
import ToTop from "./components/totop/";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ToTop
  },
  mounted() {
    this.uppScreenWidth(document.body.clientWidth);
    this.uppScreenHeight(document.body.clientHeight);
    window.addEventListener("resize", this.handleResize, true);
    // console.log('网页可见区域宽：', this.screenWidth)
    // console.log('网页可见区域高：', this.screenHeight)
  },
  computed: {
    ...mapGetters({
      screenWidth: "getScreenWidth",
      screenHeight: "getScreenHeight"
    })
  },
  methods: {
    ...mapActions({
      uppScreenWidth: "updateScreenWidth",
      uppScreenHeight: "updateScreenHeight"
    }),
    handleResize() {
      this.uppScreenWidth(document.body.clientWidth);
      this.uppScreenHeight(document.body.clientHeight);
      // console.log('网页可见区域宽：', this.screenWidth)
      // console.log('网页可见区域高：', this.screenHeight)
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #f6f6f6;
}
.copyRight {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  color: #666666;
  font-size: 12px;
}
.enter-test {
  transform: translateX(20px);
  transition: all 0.5s ease;
}
.leave-test {
  transform: translateX(20px);
  transition: all 0.5s ease;
}
</style>
