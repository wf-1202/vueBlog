<template>
  <div class="blog-article">
    <WaterFall @load-more="loadMore">
      <ArticleCard
        v-for="(item, index) in itemList"
        :item="item"
        :key="index"
        @click="clickCard(item)"
      >
      </ArticleCard>
    </WaterFall>
  </div>
</template>

<script>
import {
  cssList,
  methodList,
  questionList,
  reactList,
  vueList,
  wxList,
} from "../../data/allData";
import WaterFall from "../waterfall/";
import ArticleCard from "../waterfall/ArticleCard";

export default {
  name: "Type",
  components: {
    WaterFall,
    ArticleCard,
  },
  data() {
    return {
      itemList: [],
    };
  },
  created() {
    let arr = [];
    arr = arr
      .concat(cssList)
      .concat(methodList)
      .concat(questionList)
      .concat(reactList)
      .concat(vueList)
      .concat(wxList);
    this.itemList = arr.filter((e) => {
      return e.type == this.$route.query.type;
    });
  },
  mounted() {},
  methods: {
    loadMore() {
      this.itemList = this.itemList.concat(itemList);
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
