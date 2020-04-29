<template>
  <div class="characteristic">
    <div class="charateristic__list">
      <div class="charateristic__item">
        <h3>特色功能</h3>
        <div class="item">
          <!-- <span class="active">全部</span>
            <span>可退票</span>
            <span>可改签</span>
            <span>可改签</span> -->
          <span
            v-for="ele in introduce"
            :key="ele"
            :class="{ active: ele === curIntroduce }"
            @click="changeCur(ele, 'one')"
          >
            {{ ele }}
          </span>
        </div>
      </div>

      <div class="charateristic__item">
        <h3>特殊厅</h3>
        <div class="item">
          <span
            v-for="ele in hall"
            :key="ele"
            :class="{ active: ele === curhall }"
            @click="changeCur(ele, 'two')"
          >
            {{ ele }}
          </span>
        </div>
      </div>
    </div>

    <div class="charateristic__btn">
      <span @click="changeCur('', 'three')">重置</span>
      <span @click="submit" class="active">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characteristic",
  data() {
    return {
      introduce: ["全部", "可退票", "可改签"],
      curIntroduce: "全部",
      hall: ["全部", "可退票", "可改签"],
      curhall: "全部"
    };
  },

  created() {
    // 根据当城市请求  特色 数据
  },

  methods: {
    changeCur(ele, type) {
      if (type === "one") {
        this.curIntroduce = ele;
      } else if (type === "two") {
        this.curhall = ele;
      } else if (type === "three") {
        this.curIntroduce = "全部";
        this.curhall = "全部";
      }
    },
    submit() {
      // 浮层消失

      this.$parent.showPopup("");
    }
  }
};
</script>

<style lang="less" scoped>
.characteristic {
  position: relative;
  padding-right: 0.8rem;
  padding-left: 0.28rem;
  background-color: #fff;
  color: #333333;
  height: 6.86rem;
  font-size: 0.3rem;
  .charateristic__list {
    position: absolute;
    top: 0;
    right: 0.8rem;
    left: 0.28rem;
    bottom: 1.24rem;
    overflow: scroll;
    .charateristic__item {
      overflow: hidden;
      h3 {
        font-weight: normal;
        padding-top: 0.22rem;
      }
      .item {
        margin-bottom: 0.24rem;
        span {
          font-size: 0.24rem;
          display: inline-block;
          width: 21%;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          border: 1px solid #e5e5e5;
          border-radius: 5px;
          box-sizing: border-box;
          margin: 0.2rem 0.2rem 0 0;
          &.active {
            color: #f03d37;
            border: 1px solid #f03d37;
          }
        }
      }
    }
  }

  .charateristic__btn {
    border-top: 2px solid #e5e5e5;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-left: 0.3rem;
    height: 1.2rem;
    width: 7.16rem;
    display: flex;
    background-color: #fafafa;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 0.24rem;
      display: inline-block;
      font-size: 0.26rem;
      width: 21%;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      margin: 0.2rem 0.2rem 0 0;
      &.active {
        color: #fff;
        border: 1px solid #f03d37;
        background-color: #f03d37;
      }
    }
  }
}
</style>
