<template>
  <div>
    <div
      class="heading"
      style="background-color: rgba(39, 41, 52); color: #fff"
    ></div>
    <!---->
    <div
      class="features modal modal-signin position-static d-block py-0"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="card modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
            <h1 class="card-title mb-0 fs-2">전설적인 로그인하기!</h1>
          </div>

          <div class="modal-body p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
                <small id="emailHelp" class="subtitle mb-0 fs-0">
                  {{ emailMsg }}.
                </small>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="password"
                  :disabled="this.isEmail === false"
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
                <small id="emailHelp" class="subtitle mb-0 fs-0">
                  {{ passMsg }}.
                </small>
              </div>
              <button
                :disabled="this.isPassword === false"
                class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                로그인 하기
              </button>
              <small class="card-title">아이디를 잃어버렸습니까?</small>
              <small class="subtitle"> 아이디 찾기</small>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--heading end-->

    <!--feature end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isEmail: false,
      isPassword: false,
      emailMsg: "이메일을 입력",
      passMsg: "비번 입력",
    };
  },
  watch: {
    //email check
    email() {
      // 변수
      let emailLength = this.email.length;
      //logic
      if (emailLength !== 0) {
        this.checkEmail();
      } else {
        this.emailMsg = "이메일을 입력해주세요";
      }
    },
    password() {
      // 변수
      let passwordLength = this.password.length;
      //logic
      if (passwordLength !== 0) {
        this.checkPassword();
      } else {
      }
    },
  },
  methods: {
    checkEmail() {
      // 변수
      let emailLength = this.email.length;
      let emailcheck = this.$store.state.validateEmail;
      //logic
      if (emailcheck.test(this.email) && emailLength !== 0) {
        this.isEmail = true;
        this.emailMsg = "success";
      } else {
        this.isEmail = false;
        this.emailMsg = "이메일을 입력해주세요";
      }
    },
    checkPassword() {
      console.log("pass");
    },
  },
};
</script>

<style></style>
