<template>
  <div class="serach">
    <Top-bar
      :title="title"
      :more_show="more_show"
      :back_show="back_show"
      :backUrl="backUrl"
    />
    <div class="search__warp">
      <div class="input__warp">
        <input
          type="text"
          name=""
          id=""
          maxlength="10"
          v-model="searchContent"
          placeholder="搜影院"
          class="search__input"
        />
        <i
          class="iconfont icon-cross"
          v-show="searchContent"
          @click="setHistory"
        ></i>
      </div>
      <router-link
        tag="span"
        to="/cinema"
        class="search__cancle"
        @click="setHistory"
        >取消</router-link
      >
    </div>

    <!-- 搜索结果列表 -->
    <!-- <div class="srarch__list">
            <p class="search__title">影院</p>
            <ul >
                <li class="search__item">
                    每一个
                </li>
            </ul>
            <p class="search__sun">查看全部<span>20</span>家影院</p>
        </div>    -->
    <!-- 搜索结果列表结束 -->
    <!-- 历史记录区域 -->
    <div class="search__history " v-if="historyListshow">
      <ul>
        <li v-for="(history, index) in historyArr" :key="history">
          <span class="search__keyword"
            @click="backfillHistory(history)"
          >{{ history }}</span>
          <i class="iconfont icon-cross" @click="cancleHistory(index)"></i>
        </li>
      </ul>
    </div>
    <!-- 历史记录区域结束-->
  </div>
</template>

<script>
import TopBar from "@/components/common/TopBar.vue";

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.backUrl = from.name;
    });
  },
  data() {
    return {
      backUrl: "",
      title: "猫眼电影",
      more_show: true,
      back_show: true,
      searchContent: "",
      historyArr: [],
    };
  },
  components: {
    TopBar
  },
  created() {
    if (sessionStorage.history) {
      this.historyArr = sessionStorage.getItem("history").split(",");
    } else {
      this.getLocal();
    }
  },
  computed : {
    historyListshow () {
      return this.searchContent === "";
    }
  },
  methods: {
    setHistory() {
      const flag = this.historyArr.includes(this.searchContent);
      if (!flag) {
        this.historyArr.push(this.searchContent);
      }
      this.searchContent = "";
      this.addLocal();
    },
    /**删除历史记录 */
    cancleHistory(deltetIndex) {
      this.historyArr = this.historyArr.filter((ele, index) => {
        return index !== deltetIndex;
      });
      this.addLocal();
    },
    /**添加到本地 */
    addLocal() {
      localStorage.setItem("history", this.historyArr);
      sessionStorage.setItem("history", this.historyArr);
    },
    /**从本地获取 */
    getLocal() {
      this.historyArr = localStorage.getItem("history").split(",");
      if (this.historyArr[0] === "") {
        this.historyArr = [];
      }
    },
    /**回填历史记录点击 */
    backfillHistory (history) {
      this.searchContent = history;
    }
  }
};
</script>

<style lang="less" scoped>
.serach {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  .search__warp {
    width: 100%;
    height: 1.01rem;
    padding: 0.16rem 0 0.16rem 0.2rem;
    box-sizing: border-box;
    .input__warp {
      width: 6.22rem;
      height: 0.56rem;
      border: 1px solid #e6e6e6;
      background-color: #fff;
      text-align: center;
      line-height: 0.56rem;
      display: inline-block;
      border-radius: 0.1rem;
      .search__input {
        border: none;
        outline: none;
        width: 5.02rem;
        height: 0.4rem;
        line-height: 0.4rem;
      }
    }
    .search__cancle {
      font-size: 0.32rem;
      color: #f03d37;
      margin-left: 0.24rem;
    }
  }

  .search__history {
    background-color: #fff;
    padding-left: 0.3rem;
    ul {
      li {
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        height: 0.88rem;
        line-height: 0.88rem;
        font-size: 0.3rem;
        color: #333;
        justify-content: space-between;
        .icon-cross {
          margin-right: 0.3rem;
        }
      }
    }
  }
}
</style>
