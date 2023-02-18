<template>
  <div>
    <img
      src="../assets/default/Home.png"
      alt="My Image"
      width="100%"
      height="200%"
    />
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <video
              autoplay
              src="../assets/default/hero-animation@2x.10eb6a5.mp4"
              class="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
            ></video>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Play Run Joy OxOg!!</h1>
            <p class="lead">
              공연,힙합뉴스,커뮤니티,음원 없는게 없는사이트 공연 알바도 찾고
              <br />음악지식도 공유해보세요,
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                커뮤니티
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                가입하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/middle components/-->

    <br /><br />

    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">뉴스 / 국힙</h3>
            <br />
            <p class="subtitle">최신 글</p>
            <router-link class="btn btn-primary" to="/news">
              국힙뉴스가기
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">질문</h3>
            <br />
            <a href="/ask" class="btn btn-primary">질문 바로가기 </a>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">개성있는 프로필 만들기</h3>
            <br />
            <p class="card-text"></p>
            <a href="/userView" class="btn btn-primary">프로필 바로가기 </a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">음악 알바</h3>
            <br />
            <a href="/jobs" class="btn btn-primary">공연 알바 바로가기 </a>
          </div>
        </div>
      </div>
    </div>
    <!--/features end-->

    <!--end-->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"; // 뷰엑스 제공 속성
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style>
.main_div {
  background-image: url("../assets/default/Home.png");
  background-position: center;
}
</style>
