<template>
  <div class="top">
    <div class="top__back">
      <router-link :to="{ name: backUrl }" href="#" v-if="back_show">
        <i class="iconfont icon-icon-copy"></i>
      </router-link>
    </div>
    <div class="top__title">{{ title }}</div>
    <div class="top__more">
      <div class="button" v-if="more_show">···</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    title: {
      type: String,
      required: true
    },
    more_show: Boolean,
    back_show: Boolean,
    backUrl: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.top {
  width: 100%;
  height: 1.01rem;
  background-color: @TopBar_color;
  display: flex;
  justify-content: space-between;
  line-height: 1.01rem;
  color: #fff;
  .top__title {
    flex: 0 0 5rem;
    text-align: center;
    font-size: 0.36rem;
  }
  .top__back {
    width: 1rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      color: #fff;
      padding: 0 0.3rem;
      .icon-icon-copy {
        display: block;
        width: 0.45rem;
        height: 0.45rem;
        font-size: 0.36rem;
      }
    }
  }
  .top__more {
    width: 1rem;
    text-align: right;
    .button {
      height: 100%;
      padding-right: 0.1rem;
      line-height: 1.01rem;
      font-size: 0.7rem;
    }
  }
}
</style>
