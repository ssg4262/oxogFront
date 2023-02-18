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
        <tr v-for="(jobs, idx) in this.$store.state.jobs" :key="idx">
          <th scope="row">{{ idx + 1 }}</th>
          <td>
            <a v-bind:href="jobs.url">{{ jobs.title }}</a>
          </td>
          <td>{{ jobs.time_ago }}</td>
          <td>{{ jobs.user }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    this.jobs = this.$store.state.jobs;
  },
};
</script>

<style></style>
