<template>
  <div class="footer">
    <router-link to="/home" tag="div" class="footer__movie">
      <i class="iconfont icon-dianying1"></i>
      <p>电影</p>
    </router-link>
    <router-link to="/cinema" tag="div" class="footer__cinema">
      <i class="iconfont icon-yingyuan"></i>
      <p>影院</p>
    </router-link>
    <router-link to="/mine" tag="div" class="footer__my">
      <i class="iconfont icon-wode"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  border-top: 1px solid #ccc;
  padding-top: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  div {
    flex: 1 0 auto;
    text-align: center;
    color: #696969;
    &.router-link-active {
      color: @TopBar_color;
    }
    i {
      width: 25px;
      height: 25px;
      font-size: 25px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>
