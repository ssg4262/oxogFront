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
              공연,힙합뉴스,커뮤니티,음원 사이트 <br />공연 알바도 찾고
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
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!--custom card-->

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
            <a href="/user" class="btn btn-primary">프로필 바로가기 </a>
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
.chill {
  background-image: url("../assets/defaultImage/chillmusic.png");
  background-size: 600px 400px;
  background-repeat: no-repeat;
  background-position: center;
}
.drill {
  background-image: url("../assets/defaultImage/drillmusic.png");
  background-size: 600px 400px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
