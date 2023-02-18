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
        <tr v-for="(ask, idx) in this.$store.state.ask" :key="idx">
          <th scope="row">{{ idx + 1 }}</th>
          <td>
            <a v-bind:href="ask.url">{{ ask.title }}</a>
          </td>
          <td>{{ ask.time_ago }}</td>
          <td>{{ ask.user }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_ASK"); //actions dispatch
  },
  mounted() {
    this.askList = this.$store.state.ask;
  },
};
</script>

<style></style>
