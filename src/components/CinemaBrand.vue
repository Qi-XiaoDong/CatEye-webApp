<template>
  <div class="brand">
    <ul class="brand__list">
      <li
        class="brand__item"
        v-for="value in brandList"
        :key="value.result"
        :class="value.result === chooseResult && 'brand__item--active'"
        @click="choose(value.result)"
      >
        <span class="result">{{ value.result }}</span>
        <span class="sum"> {{ value.sum }}</span>
      </li>
      <!-- <li class="brand__item brand__item--active">
                <span class="result">其他</span>
                <span class="sum">1</span>
            </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Brand",
  data() {
    return {
      chooseResult: "全部",
      brandList: [
        { result: "全部", sum: 1 },
        { result: "其他", sum: 1 }
      ]
    };
  },
  created() {
    // 发送请求 获得到展示列表
  },
  methods: {
    choose(result) {
      this.chooseResult = result;

      // 浮层消失
      this.$parent.showPopup("");
    }
  }
};
</script>

<style lang="less" scoped>
.brand {
  height: 50%;
  padding-right: 0.6rem;
  background-color: #fff;
}
.brand__item {
  position: relative;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.3rem;
  color: #333;
  padding-left: 0.6rem;
  display: flex;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #e5e5e5;
    // background-color: red;

    bottom: 0;
    left: 0;
  }

  span {
    width: 50%;
  }
  .result {
    text-align: left;
  }
  .sum {
    text-align: right;
  }
}
.brand__item--active {
  color: #dd403b;
}
</style>
