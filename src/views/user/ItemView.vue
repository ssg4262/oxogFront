<template>
  <div>
    <section>
      <!--질문 상세 내역-->
      <div>사용자 프로필</div>
      <div>
        <router-link :to="'/user/' + commentItem.user">
          {{ commentItem.user }}
        </router-link>
      </div>
      <div>{{ commentItem.time_ago }}</div>
      <h2>{{ commentItem.title }}</h2>
    </section>
    <!-- /// end ///-->
    <section>
      <!--질문 댓글-->
    </section>
  </div>
</template>

<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId); //axios call
  },
  computed: {
    commentItem() {
      return this.$store.state.commentItem;
    },
  },
};
</script>

<style></style>
