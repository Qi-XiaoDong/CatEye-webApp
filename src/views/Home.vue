<template>
  <div class="home">
    <!-- 顶部 -->
    <Top-bar :title="title" :more_show="more_show" />
    <!-- 下载软件 -->
    <div class="download" v-show="downloadShow">
      <a href="http://m.maoyan.com/app?channel=mymovie1yuan-dy">
        <h1>
          <img src="@/assets/logo.png" alt="" />
        </h1>
        <div class="app_name_des">
          <div class="app_name">猫眼</div>
          <div class="app_des">在线选座，热门影讯，爱上看电影</div>
        </div>
        <div class="btn_open">立即打开</div>
      </a>
    </div>
    <!-- 导航 -->
    <nav class="nav">
      <div class="nav_city">
        <router-link to='/city' tag="span">{{ curCity }}</router-link>
        <i class="iconfont icon-f11"></i>
      </div>
      <div class="nav_movie">
        <router-link tag="h2" :to="{ name: 'hotmovie' }">正在热映</router-link>
        <router-link tag="h2" :to="{ name: 'willmovie' }">即将上映</router-link>
      </div>
      <div class="nav_search">
        <router-link
          tag="i"
          class="iconfont icon-sousuo"
          to="/search"
        ></router-link>
      </div>
    </nav>
    <!--  路由显示 缓存机制但是有问题-->
    <!-- <keep-alive> -->
    <router-view class="router" :class="{ top: !downloadShow }" />
    <!-- </keep-alive> -->
<!-- 底部 -->
    <my-foot />
  </div>
</template>

<script>
import TopBar from "@/components/common/TopBar.vue";
import MyFoot from "@/components/common/Foot.vue";
import {mapState} from 'vuex';
export default {
  name: "Home",
  data() {
    return {
      downloadShow: true,
      title: "猫眼电影",
      more_show: true,
    };
  },
  computed : {
    ...mapState(['curCity'])
  },

  methods: {
    changeDownloadShow(flag) {
      this.downloadShow = flag;
    }
  },
  components: {
    TopBar,
    MyFoot
  }
};
</script>

<style scoped lang="less">
.home{
  height: 100vh;
  width:100%;
  position: relative;
}
.download {
  width: 100%;
  height: 1.28rem;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #ccc;
  a {
    display: block;
    height: 100%;
    h1 {
      position: absolute;
      left: 0.3rem;
      top: 0.22rem;
      img {
        display: block;
        width: 0.88rem;
        height: 0.88rem;
      }
    }
    .app_name_des {
      position: absolute;
      left: 1.32rem;
      top: 0.26rem;
      .app_name {
        font-size: @textSize;
        color: #222;
        line-height: 0.46rem;
      }
      .app_des {
        font-size: 0.24rem;
        color: #999;
      }
    }
    .btn_open {
      position: absolute;
      right: @textSize;
      top: 0.3rem;
      width: 1.36rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      background: #ef4238;
      border-radius: 0.06rem;
      font-size: 0.26rem;
      color: #fff;
    }
  }
}
.nav {
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  .nav_city {
    padding-left: 0.3rem;
    font-size: 0.3rem;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 1.7rem;
      max-width: 19.2vw;
    }
    .icon-f11 {
      width: 0.16rem;
      height: 0.16rm;
      font-size: 0.3rem;
    }
  }
  .nav_movie {
    flex: 1 0 auto;
    display: flex;
    justify-content: space-around;
    h2 {
      font-size: 0.3rem;
      color: #666;
      box-sizing: border-box;
      height: 0.8rem;
      line-height: 0.8rem;
      &.router-link-exact-active {
        color: @TopBar_color;
        border-bottom: 2px solid @TopBar_color;
      }
    }
  }
  .nav_search {
    width: 0.9rem;
    height: 0.8rem;
    padding: 0.1rem 0.15rem 0.1rem 0.1rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 0.6rem;
    .icon-sousuo {
      font-size: 0.3rem;
      width: 0.4rem;
      height: 0.4rem;
      color: @TopBar_color;
      font-weight: 1000;
    }
  }
}
.router {
  position: absolute;
  width: 100%;
  top: 3.11rem;
  bottom: 53px;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  &.top {
    top: 2.1rem;
  }
}
</style>
