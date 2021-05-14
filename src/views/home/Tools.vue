<template>
  <div :class="['layout', !show && 'shutDown']">
    <el-card>
      <div style="text-align: right">
        <el-button style="padding: 3px 0;" type="text" @click="close"
          >关闭</el-button
        >
      </div>
      <div class="card" v-for="(item, index) in list" :key="index">
        <div>{{ item.title }}</div>
        <div>
          <a target="_blank" :href="item.link">{{ item.link }}</a>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      list: [
        {
          title: "图片库",
          link: "https://source.unsplash.com"
        },
        {
          title: "clip-path生成器",
          link: "https://www.html.cn/tool/css-clip-path/"
        },
        {
          title: "css多色渐变",
          link: "https://gradienta.io/"
        }
      ]
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  position: absolute;
  z-index: 999;
  top: 200px;
  right: 30px;
  .card {
    padding-top: 20px;
    line-height: 40px;
    a {
      text-decoration: none;
      color: #13c2c2;
    }
  }
  .el-button--text {
    color: #13c2c2;
  }
}
.shutDown {
  display: none;
}
</style>
