<template>
  <div class="mine">
    <Top-bar :title="title" :back_show="back_show" backUrl="Home" />

    <!-- 内容区域 -->
    <div class="mine__content">
    <!-- 登录选择 -->
      <div class="mine__btn--login">
        <div :class="{ 'mine__btn--active': showThat }" @click="changeShowThat">
          美团账号登录
        </div>
        <div
          :class="{ 'mine__btn--active': !showThat }"
          @click="changeShowThat"
        >
          手机验证登录
        </div>
      </div>  <!-- 登录选择 结束-->
        
      <!-- 登录信息输入 -->
      <div class="mine__input">
          <!-- 账号登录 -->
        <div key="123132" class="account" v-show="showThat">
          <my-input :key="1" placeholder="账户名/手机号/Email" />
          <my-input :key="2" inputType="password" placeholder="请输入密码" />
        </div>
        <!-- 手机登录 -->
        <div key="13213131133"  class="phone" v-show="!showThat">
          <my-input
            :key="3"
            inputType="number"
            placeholder="请输入手机号"
            :code="phoneCode"
          />
          <my-input :key="4" 
            inputType="number" 
            placeholder="请输入验证码" 
            :max="codeLength"    
        />
        </div>
        <!-- 登录按钮 -->
        <div class="input__btn--submit" :class="{disabled : !showThat}">登录</div>
      </div> <!-- 登录信息输入结束 -->
     
      
      <!-- 版权声明 -->
        <div class="mine__footer">
            <div class="sunline">
                <a href="https://i.meituan.com/account/signup">立即注册</a>
                <a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
            </div>
            <p class="copyright">
                © 猫眼电影 客服电话：
                <a href="#">400-670-5335</a>
            </p>
        </div> <!-- 版权声明结束 -->
     
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/common/TopBar.vue";
import MyInput from "@/components/MineInput.vue";
export default {
  name: "mine",
  data() {
    return {
      title: "猫眼电影",
      back_show: true,
      showThat: true,
      phoneCode:true,
      codeLength : 6
    };
  },
  components: {
    TopBar,
    MyInput
  },
  methods: {
    changeShowThat() {
      this.showThat = !this.showThat;
    }
  }
};
</script>

<style lang="less" scoped>
.mine__content {
  width: 100%;
  height: calc(100vh - 1.01rem);
  background-color: #f5f5f5;
  .mine__btn--login {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    div {
      flex: 1 1 auto;
      text-align: center;
      line-height: 1rem;
      font-size: 0.26rem;
      margin: 0 0.28rem;
      position: relative;
    }
    .mine__btn--active::after {
      content: "";
      width: 100%;
      height: 0.1rem;
      position: absolute;
      bottom: -0.1rem;
      left: 0rem;
      background-color: #ffc300;
      border-radius: 0.05rem;
    }
  }

  .mine__input {
    margin-top: 0.1rem;
    position: relative;
    account,
    phone {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    .input__btn--submit{
        margin-top: 0.5rem;
        width: 90%;
        height: 0.86rem;
        margin: 0.5rem  auto 0;
        font-size: 0.3rem;
        line-height: 0.86rem;
        text-align: center;
        letter-spacing: 5px;
        color: #fff;
        background: #de2d2d;
        border-radius: 5px;
    }
     .disabled {
        color: #999;
        border: 1px solid rgb(235, 235, 228);
        background-color: rgb(235, 235, 228);
    }
  }
  
  .mine__footer {
    margin: 0.56rem 0.4rem;
    .sunline{
        display: flex;
        justify-content: space-between;
        font-size: 0.28rem;
        color:#fe8c00;
        a{
            color:inherit
        }
        
    }
    .copyright{
        margin-top: 0.28rem;
        text-align: center;
        font-size:0.28rem;
        a{
            color:#df2d2d;
        }
    }
  }
}

</style>
