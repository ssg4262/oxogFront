<template>
  <div style="background-color: rgba(39, 41, 52); color: #fff; font-size: 16px">
    <!--nav start-->
    <nav class="py-2 bg-light bg-transparent shadow-lg">
      <div class="container d-flex flex-wrap">
        <router-link to="/">
          <img
            alt="oxog logo"
            src="../../assets/default/logo.png"
            style="width: 100px; height: 40px"
          />
        </router-link>
        <ul class="nav me-auto"></ul>
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link link-light px-2" to="/">
              홈으로
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-light px-2" to="/community">
              커뮤니티
            </router-link>
          </li>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <router-link class="nav-link active" to="/login">
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

<style></style>
