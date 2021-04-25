<template>
  <div class="blog-friend">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in wxList"
        :item="item"
        :key="index"
        @click="clickCard(item)"
      >
      </ArticleCard>
    </WaterFall>
  </div>
</template>

<script>
import WaterFall from "../waterfall/";
import wxList from "../../data/data/wx";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "BlogFriend",
  components: {
    WaterFall,
    ArticleCard,
  },
  data() {
    return {
      wxList: [],
    };
  },
  mounted() {
    this.wxList = wxList;
  },
  methods: {
    loadMore() {
      // this.wxList = this.wxList.concat(this.wxList);
    },
    clickCard(val) {
      this.$router.push({
        path: "/zone/article",
        query: { id: val.id, type: val.type },
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
