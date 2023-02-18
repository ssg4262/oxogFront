<template>
  <div>
    {{ userInfo.id }}
    {{ userInfo.karma }}
    {{ userInfo.created }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USERDETAIL", userName); //store로 보내서 action = > axios 로 요청
  },
  computed: {
    userInfo() {
      //userInfo 로 호출 코드 줄임
      return this.$store.state.userDetail;
    },
  },
};
</script>

<style></style>
