<template>
  <div class="blog-friend">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in questionList"
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
import questionList from "../../data/data/question";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "React",
  components: {
    WaterFall,
    ArticleCard,
  },
  data() {
    return {
      questionList: [],
    };
  },
  mounted() {
    this.questionList = questionList;
  },
  methods: {
    loadMore() {
      // this.reactList = this.reactList.concat(this.reactList);
    },
    clickCard(val) {
      this.$router.push({
        path: "/zone/questionArticle",
        query: { id: val.id, type: val.type },
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
