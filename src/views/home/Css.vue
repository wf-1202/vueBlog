<template>
  <div class="blog-friend">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in cssList"
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
import cssList from "../../data/data/css";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "BlogFriend",
  components: {
    WaterFall,
    ArticleCard
  },
  data() {
    return {
      cssList: []
    };
  },
  mounted() {
    this.cssList = cssList;
  },
  methods: {
    loadMore() {
      // this.cssList = this.cssList.concat(this.cssList);
    },
    clickCard(val) {
      this.$router.push({ path: "/zone/cssArticle", query: { id: val.id } });
    }
  }
};
</script>

<style scoped lang="scss"></style>
