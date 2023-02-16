<template>
  <div>
    <div
      class="heading"
      style="background-color: rgba(39, 41, 52); color: #fff; font-size: 16px"
    >
      <div class="container-sm">
        <div class="container col-xxl-8 px-4 py-1"></div>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div class="container col-10 col-sm-8 col-lg-6">
            <!--<img
              src=""
              class="d-block mx-lg-auto img-fluid"
              alt="메인"
              width="500"
              height="500"
              loading="lazy"
            />-->
          </div>
          <div class="col-lg-6">
            <h1 class="title">Play Run Joy OxOg!!</h1>
            <p class="lead">
              메타버스같은 페이지와 보이스, 채팅 , 커뮤니티 게시판이 있는
              웹사이트 입니다.
            </p>
            <p class="subtitle">
              가장 사용하기 쉬운 대시보드로 중재 <br />, 평준화, Twitch 알림
              등을 구성하세요!
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                게시판가기
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--/features components/-->
    <div class="features">
      <div class="title">Features of OxOg</div>
      <div class="subtitle">자유 게시판, Voice! , 등등 경험 해보세요</div>
      <br /><br />
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">커뮤니티 / 자유</h3>
              <br />
              <p class="subtitle">최신 글{{ users.length }}개</p>
              <router-link class="btn btn-primary" to="/community">
                커뮤니티
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Voice</h3>
              <br />
              <a href="#" class="btn btn-primary">보이스 바로가기 </a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">개성있는 프로필 만들기</h3>
              <br />
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">프로필 바로가기 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/features end-->
    <div
      class="heading"
      style="background-color: rgba(29, 30, 39); color: #fff; font-size: 16px"
    ></div>
    <!--end-->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"; // 뷰엑스 제공 속성
export default {
  data() {
    return {
      users: [],
      jobs: [],
      communityList: [],
    };
  },
  computed: {
    ...mapGetters(["fetchNews"]),
    // ...=배열객체를 풀어서 저장해줌 es6문법
    //mapState
    // ...mapState({
    //   news: (state) => state.news,
    // }),
    // news() {
    //   return this.$store.state.news;
    // },
  },
  created() {
    const store = this.$store;
    const vm = this;

    //vuex store 에서 api 호출값 dispatch 로 가져오기
    vm.$store.dispatch("FETCH_NEWS");
    vm.$store.dispatch("FETCH_JOBS");
    //변수 담기
    vm.users = store.state.news;
    console.log(vm.users);
  },
};
</script>

<style></style>
