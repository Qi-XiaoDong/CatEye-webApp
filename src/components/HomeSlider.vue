<template>
  <div class="hot__people">
    <p class="hot__people_title">{{ title }}</p>
    <div class="hot__people_list">
      <ul>
        <li v-for="(ele, index) in info" :key="index">
          <a :href="ele.href">
            <img :src="ele.imgSrc" alt="" />
            <h5 class="hot__peolpe_name">{{ ele.name }}</h5>
            <p class="time">{{ ele.time }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "title"],
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="less" scoped>
.hot__people {
  margin-top: 0.24rem;
  padding-left: 0.3rem;
  margin-bottom: 0.24rem;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .hot__people_title {
    margin: 0;
    font-size: 0.28rem;
    color: #333;
    margin-bottom: 0.24rem;
  }
  .hot__people_list {
    ul {
      display: flex;
      overflow: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      li {
        flex: 1 0 1.7rem;
        min-height: 2.82rem;
        margin-right: 0.2rem;
        a {
          width: 100%;
          height: 100%;
          display: block;
          img {
            width: 85px;
            height: 115px;
            display: block;
          }
          h5 {
            margin: 0.1rem 0;
            color: #000;
            font-size: 13px;
          }
          .time {
            font-size: 0.24rem;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
