<template>
  <div class="choice">
    <!-- 商区 和 地铁 切换的区域 -->
    <div class="choice__condition">
      <div
        class="items"
        :class="ele === choiceCondition.active ? 'items--active' : ''"
        v-for="ele in choiceCondition.choiceTitle"
        :key="ele"
        @click="changeCondition(ele)"
      >
        {{ ele }}
      </div>
    </div>
    <!-- 商区 和 地铁 切换的区域结束-->

    <!-- 筛选结果展示的区域 -->
    <div class="choice__result">
      <!-- 左侧展示 -->
      <div class="choice__area">
        <ul>
          <li
            :class="area === areaInfo.curAreaName ? 'select' : ''"
            v-for="area in areaInfo.areaName"
            :key="area"
            @click="areaNameClick(area)"
          >
            {{ area }}
          </li>
        </ul>
      </div>
      <!--右侧展示结束-->

      <!-- 右侧展示 -->
      <div class="choice__list">
        <ul>
          <li
            v-for="areaSearchItem in areaSearchInfo"
            :key="areaSearchItem.name"
          >
            <span class="address">{{ areaSearchItem.name }}</span>
            <span class="num">{{ areaSearchItem.sum }}</span>
          </li>
        </ul>
      </div>
      <!--右侧展示结束-->
    </div>
    <!-- 筛选结果展示的区域结束-->
  </div>
</template>

<script>
export default {
  props: {
    choiceCondition: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      curCity: "", // 当前的城市
      curCityarea: "", // 当前城市所查询的区域
      areaInfo: {
        // 当前城市下的区域列表
        areaName: ["全部", "渭滨区", "金台区", "凤翔县凤翔县凤翔县凤翔县"],
        curAreaName: "全部"
      },
      // 需要点击区域名字请求数据
      areaSearchInfo: [
        { name: "全部", sum: 10 },
        { name: "经二路", sum: 10 },
        { name: "火车站", sum: 10 },
        { name: "天下汇", sum: 10 },
        { name: "高新区", sum: 10 }
      ]
    };
  },

  mounted() {
    // 1. // 获取到当前的城市名字
    // 2. // this.curCity = 获得到的城市
    // 3. 调用getRegion 得到区域列表
    // this.getRegion()
  },
  methods: {
    /**
       * 根据当前的城市名字获取到当前城市下的区域列表
       *  areaInfo: {
              areaName : ['全部', '渭滨区', '金台区', "凤翔县"],
              curAreaName: '全部'
          }
         */
    getRegion() {
      // 1. ajax 请求 当前城市下的区域列表
      // 2. this.areaInfo = {}
    },

    /**根据当前区域的名字查询区域中的信息
     *  areaSearchInfo: [
        { name: "全部", sum: 10 },
        { name: "经二路", sum: 10 },
        { name: "火车站", sum: 10 },
        { name: "天下汇", sum: 10 },
        { name: "高新区", sum: 10 }
      ]
     * @param {String} 要查询的区域
     */
    areaNameClick(area) {
      // ajax 请求查询区域中的信息
      // this.areaSearchInfo = []
      if (area === this.curCityarea) {
        console.log("目前所查询的区域就是" + area + ", 所以就不再发送请求了");
        return;
      }
      this.curCityarea = area;
      console.log(`现在请求${area}区域`);
      if (this.curCityarea === "渭滨区") {
        this.areaSearchInfo = [
          { name: "全部", sum: 10 },
          { name: "桥南", sum: 10 },
          { name: "火炬路", sum: 10 },
          { name: "公园路", sum: 10 },
          { name: "第五大道", sum: 10 }
        ];
      } else {
        this.areaSearchInfo = [
          { name: "全部", sum: 10 },
          { name: "经二路", sum: 10 },
          { name: "火车站", sum: 10 },
          { name: "天下汇", sum: 10 },
          { name: "高新区", sum: 10 }
        ];
      }
    },

    /**
     * 改变当前的changeCondition（切换 商圈 和 地铁）
     */
    changeCondition(type) {
      this.choiceCondition.active = type;
    }
  }
};
</script>

<style lang="less" scoped>
.choice {
  height: 100%;
  color: #777;
  // background-color: #bfa;
  .choice__condition {
    width: 100%;
    height: 0.88rem;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    font-size: 0.3rem;
    .items {
      flex: 1 1 auto;
      text-align: center;
      line-height: 0.88rem;
    }
    .items--active {
      color: #f03f37;
      border-bottom: 2px solid #f03f37;
    }
  }
  .choice__result {
    display: flex;
    height: calc(67vh - 0.88rem);
    background-color: rgb(245, 245, 245);
    li {
      font-size: 0.26rem;
      line-height: 0.88rem;
      font-size: 0.3rem;
      text-align: left;
      padding-left: 0.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &.select {
        color: #f03f37;
        background-color: rgb(245, 245, 245);
      }
    }
    .choice__area {
      width: 2rem;
      ul {
        overflow: auto;
        background-color: #fff;
        height: 100%;
      }
    }
    .choice__list {
      flex: 1;
      padding: 0 0.3rem 0 1rem;
      box-sizing: border-box;
      ul {
        overflow: auto;
        height: 100%;
        li {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
