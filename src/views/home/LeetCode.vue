<template>
  <div class="blog-friend">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in leetCode"
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
import leetCode from "../../data/data/leetCode";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "BlogFriend",
  components: {
    WaterFall,
    ArticleCard,
  },
  data() {
    return {
      leetCode: [],
    };
  },
  mounted() {
    this.leetCode = leetCode;
  },
  methods: {
    loadMore() {
      // this.leetCode = this.leetCode.concat(this.leetCode);
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
