<template>
  <div>
    <!--nav start-->
    <nav class="py-2">
      <div class="container d-flex flex-wrap">
        <router-link class="logo" to="/">
          <a>oxog</a>
        </router-link>
        <ul class="nav me-auto"></ul>
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/"> 홈으로 </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-2" to="/community">
              커뮤니티
            </router-link>
          </li>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                to="/login"
                style="background-color: rgb(36, 39, 42)"
              >
                로그인
              </router-link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
    <!--nav end-->
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration-line: none;
}
@font-face {
  font-family: "logo";
  src: url("../../assets/font/FasterOne-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
.logo {
  font-size: 40px;
  color: rgb(91, 74, 136);
  font-family: "logo", sans-serif;
  margin-top: 0;
  text-decoration-line: none;
}
</style>
