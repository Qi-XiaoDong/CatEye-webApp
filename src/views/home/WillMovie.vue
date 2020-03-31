<template>
  <div class="will-movie" ref="scorll" @scroll="handlescroll">
    <Slider :title="title" :info="info" class="top" />
    <ul class="will_list">
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
      <li>
        <p class="title">三月待定</p>
        <a href="">
          <img
            src="https://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg"
            alt=""
          />
          <div class="movie_info">
            <div class="left">
              <h3>站住! 小偷</h3>
              <p class="movie_want">
                <span>20000</span>
              </p>
              <div class="movie_act">
                <span>主演:</span>
                <span>孙悟空，猪八戒</span>
              </div>
              <div class="movie_time">
                <span class="time">2020-2-12</span>
                <span>上映</span>
              </div>
            </div>
            <div class="right">
              想看
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Slider from "@/components/home/Slider.vue";

export default {
  name: "willMovie",
  data() {
    return {
      title: "近期最受期待",
      info: [
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/170.230/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg",
          name: "大红袍",
          time: "4月20日"
        }
      ]
    };
  },
  components: {
    Slider
  },
  methods: {
    handlescroll() {
      if (this.$refs.scorll.scrollTop >= 160) {
        this.$parent.changeDownloadShow(false);
      } else {
        this.$parent.changeDownloadShow(true);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.will-movie {
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
  .top {
    margin-top: 0;
    padding-top: 0.28rem;
    box-sizing: border-box;
  }
  .will_list {
    // margin-top: -0.3rem;
    li {
      padding-left: 0.3rem;
      background-color: #fff;
      p.title {
        padding: 0.24rem 0.3rem 0 0;
        margin: 0;
        font-size: 0.28rem;
        color: #333;
      }
      a {
        display: block;
        height: 2.28rem;
        display: flex;
        padding: 0.24rem 0;
        box-sizing: border-box;
        justify-content: space-between;
        img {
          display: block;
          height: 100%;
        }
        .movie_info {
          flex: 1 0 auto;
          text-align: left;
          display: flex;
          justify-content: space-between;
          padding-left: 0.3rem;
          .left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h3 {
              font-size: 0.34rem;
              color: #333;
              font-weight: 700;
              flex-shrink: 1;
            }
            .movie_want {
              color: #faaf00;
              font-size: 0.3rem;
              font-weight: 600;
              &.movie_want::after {
                content: " 人想看";
                font-size: 0.24rem;
                color: #666;
              }
            }
            .movie_act {
              font-size: 0.26rem;
              color: #666;
            }
            .movie_time {
              font-size: 0.26rem;
              color: #666;
            }
          }
          .right {
            width: 0.94rem;
            height: 0.54rem;
            align-self: center;
            background-color: #faaf00;
            line-height: 0.54rem;
            text-align: center;
            color: #fff;
            font-size: 0.26rem;
            border-radius: 0.08rem;
            margin-right: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
