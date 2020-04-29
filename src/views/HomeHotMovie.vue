<template>
  <div class="hot_movie">
    <slider :title="title" :info="info" />
    <div class="news">
      <p class="news__title">娱乐热点</p>
      <ol>
        <li v-for="news in hotspots"
          :key="news.id"
        >
          <a href="">
            <p>{{news.text}}</p>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/HomeSlider.vue";
import mockapi from "@/api/mockapi"
export default {
  name: "hotMovie",
  data() {
    return {
      title: "热门影人",
      info: [],  // 热门影人介绍
      hotspots : [], // 娱乐热点
    };
  },
  created () {
    mockapi.getStar().then(res => {
      this.info = res.data;
    });
    mockapi.getHotsPots().then(res => {
      this.hotspots = res.data;
    });
  },
  components: {
    Slider
  }
};
</script>

<style lang="less" scoped>
.hot_movie {
  max-width: 750px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  .news {
    background-color: #fff;
    padding-left: 0.3rem;
    padding-top: 0.24rem;
    font-size: 0.28rem;
    color: #333;
    ol {
      margin: 0;
      padding-left: 0.3rem;
      li {
        width: 95%;
        a {
          color: inherit;
          font-size: inherit;
          display: block;
          width: 100%;
          height: 100%;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0.28rem 0;
          }
        }
      }
    }
  }
}
</style>
