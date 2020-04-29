<template>
    <ul class="show__cinema" @scroll="getCinemaDate">
      <li v-for="cinema in cinemaArr"
        :key="cinema.id"
      >
        <p class="cinema__name">{{cinema.name}}</p>
        <div class="cinema__address">
          <p class="address">{{cinema.address}}</p>
          <span>{{cinema.distance}}km</span>
        </div>
         <div class="cinema__tag">
          <div v-for="tag in cinema.tagArr"
            :key="tag.id"
            :class="tag.className"
          >{{tag.tagName}}</div>
        </div>
        <div class="cinema__youhui">{{cinema.youhui}}</div>
      </li>
    </ul>
</template>

<script>
export default {
    props:{
        cinemaArr : {   // 要渲染的电影院列表
            type:Array,
            required:false
        },
    },
    data () {
      return {
        cinemaGettingData : false,  // 是否正在请求数据
        cinemaGettingScroll : 100, // 滚动条距离100px时候发送请求获取数据
      }
    },
    methods : {
      /**
       * 滚动条事件,在达到特定要求后重新发送请求获取新的数据
       */
      getCinemaDate (e) {
        const dom = e.target;
        const { scrollTop, scrollHeight, offsetHeight } = dom;
        if (scrollHeight - scrollTop - offsetHeight <= this.cinemaGettingScroll && !this.cinemaGettingData) {
          this.cinemaGettingData = true; // 正在请求
          // this.$emit('getCinema');
          this.cinemaGettingData = false;  // 请求结束
        }
      }
    }
}
</script>

<style lang="less" scoped>
.show__cinema {
  width: 7.16rem;
  position: absolute;
  top: 2.68rem;
  bottom: 53px;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
  li {
    padding: 13px 15px 13px 0;
    min-height: 1.96rem;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    .cinema__name {
      height: 0.46rem;
      line-height: 0.46rem;
      font-size: 0.32rem;
      color: #000;
      font-weight: bolder;
    }
    .cinema__address {
      display: flex;
      font-size: 0.26rem;
      color: #666;
      justify-content: space-between;
      .address {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .cinema__tag {
      height: 0.34rem;
      line-height: 0.34rem;
      margin-top: 0.08px;
      margin-bottom: 0.08px;
      overflow: hidden;
      font-size: 0;
      flex-shrink: 0;
      div {
        display: inline-block;
        padding: 0 0.1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-radius: 0.04rem;
        font-size: 0.28rem;
        margin-right: 0.1rem;
        &:nth-child(n + 1){
            color: #589daf;
            border: 1px solid #589daf;
        }
        &:nth-child(2n){
            color: #f90;
            border: 1px solid #f90;
        }
      }
    }
    .cinema__youhui {
      font-size: 0.26rem;
      color: #666;
    }
  }
}
</style>