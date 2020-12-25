<template>
  <div class="blog-friend">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in reactList"
        :item="item"
        :key="index"
        @click="clickCard"
      >
      </ArticleCard>
    </WaterFall>
  </div>
</template>

<script>
import WaterFall from "../waterfall/";
import reactList from "../../data/react";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "React",
  components: {
    WaterFall,
    ArticleCard
  },
  data() {
    return {
      reactList: []
    };
  },
  mounted() {
    this.reactList = reactList;
  },
  methods: {
    loadMore() {
      this.reactList = this.reactList.concat(this.reactList);
    },
    clickCard(val) {
      this.$router.push("/zone/type");
    }
  }
};
</script>

<style scoped lang="scss"></style>
