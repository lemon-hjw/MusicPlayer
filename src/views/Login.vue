<template>
  <div class="whole">
    <div class="box">
      <h3>Login</h3>
      <div class="input">
        <label for="">账号</label>
        <input name="phone" type="text" placeholder="" v-model="phone" />
      </div>
      <div class="input">
        <label for="">密码</label
        ><input name="password" type="password" v-model="password" />
      </div>
      <button @click="Login">登录</button>
    </div>
  </div>
</template>
<script>
import { getLoginUser } from "@/request/api/home.js";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    Login: async function () {
      if (this.phone == "1" && this.password == "1") this.$router.go(-1);
      // this.$store.dispatch("getLogin", {
      //   phone: this.phone,
      //   password: this.password,
      // });
    },
  },
};
</script>
<style lang="less" scoped>
.whole {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/bgimg.jpg") no-repeat;
  background-size: cover;
  .box {
    border-radius: 0.4rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 70%;
    height: 5.5rem;
    border-top: 0.02rem solid rgba(255, 255, 255, 0.5);
    border-bottom: 0.02rem solid rgba(255, 255, 255, 0.5);
    border-left: 0.02rem solid rgba(255, 255, 255, 0.5);
    border-right: 0.02rem solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(0.2rem);
    background: rgba(50, 50, 50, 0.4);
    h3 {
      color: rgba(255, 255, 255, 0.9);
      margin-top: 0.35rem;
    }
    .input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin-bottom: 0.3rem;
      label {
        margin-bottom: 0.2rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.26rem;
      }
      input {
        box-sizing: border-box;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.26rem;
        height: 0.7rem;
        width: 3.5rem;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 0.1rem;
        transition: 0.2s;
        outline: none;
        padding: 0 0.2rem;
        letter-spacing: 1px;
        &:focus {
          border: 0.02rem solid rgba(255, 255, 255, 0.9);
        }
      }
    }
    button {
      width: 3.447rem;
      height: 0.7rem;
      border: 1px solid rgba(197, 81, 58, 0.8);
      background: rgba(197, 81, 58, 0.5);
      color: rgba(255, 255, 255, 0.9);
      border-radius: 0.1rem;
      transition: 0.2s;
      margin-top: 0.3rem;
      &:hover {
        border: 1px solid rgba(248, 108, 76, 0.8);
        background: rgba(248, 108, 76, 0.5);
      }
    }
  }
}
</style>
