<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">title</th>
          <th scope="col">last</th>
          <th scope="col">user</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(news, idx) in this.$store.state.news" :key="idx">
          <th scope="row">{{ idx + 1 }}</th>
          <td>
            <a v-bind:href="news.url">{{ news.title }}</a>
          </td>
          <td>
            <small>{{ news.time_ago }} </small>
          </td>
          <td>
            <router-link v-bind:to="'/user/' + news.user">
              <small>{{ news.user }}</small>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
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
