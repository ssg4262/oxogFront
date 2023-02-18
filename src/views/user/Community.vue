<template>
  <div>
    <div v-for="(news, index) in newsList" :key="index">
      {{ index + 1 }}
      <a v-bind:href="news.url"> {{ news.title }}</a>
      {{ news.time_ago }}
      {{ news.user }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    this.newsList = this.$store.state.news;
  },
  computed: {
    time_ago() {},
  },
};
</script>

<style></style>
