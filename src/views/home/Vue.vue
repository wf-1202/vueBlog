<template>
  <div class="blog-article">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in vueList"
        :item="item"
        :key="index"
        @click="clickCard(item)"
      >
      </ArticleCard>
    </WaterFall>
  </div>
</template>

<script>
import vueList from "../../data/vue";
import WaterFall from "../waterfall/";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "Vue",
  components: {
    WaterFall,
    ArticleCard
  },
  data() {
    return {
      vueList: [
        {
          img: require("../../assets/img/timg.jpg"),
          month: "Jan",
          day: 5,
          title: "Java",
          author: "itmacy",
          desc: "Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点."
        }
      ]
    };
  },
  created() {
    this.vueList = vueList;
  },
  mounted() {},
  methods: {
    loadMore() {
      this.vueList = this.vueList.concat(vueList);
    },
    clickCard(val) {
      this.$router.push({ path: "/zone/article", query: { id: val.id } });
    }
  }
};
</script>

<style scoped lang="scss"></style>
