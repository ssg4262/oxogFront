<template>
  <body>
    <main-header></main-header>
    <router-view></router-view>
  </body>
</template>

<script>
//import 영역
import MainHeader from "./components/defaultLayout/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
  methods: {},
};
</script>

<style>
@import "./assets/css/main.css";
@import "./assets/css/now-ui-kit.css";
</style>
