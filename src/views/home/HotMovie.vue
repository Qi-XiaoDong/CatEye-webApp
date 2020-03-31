<template>
  <div class="hot_movie">
    <slider :title="title" :info="info" />
    <div class="news">
      <p class="news__title">娱乐热点</p>
      <ol>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p>
              粉丝苦盼三年计时等待！电影《星游记2》，3月28日网络上线“再现奇迹”
            </p>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/home/Slider.vue";
export default {
  name: "hotMovie",
  data() {
    return {
      title: "热门影人",
      info: [
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        },
        {
          href: "#",
          imgSrc:
            "https://p1.meituan.net/moviemachine/8f8c7623f568873c7f2c5947e7e790d6143672.jpg",
          name: "江兰萱"
        }
      ]
    };
  },
  components: {
    Slider
  }
};
</script>

<style lang="less" scoped>
.hot_movie {
  width: 100%;
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
