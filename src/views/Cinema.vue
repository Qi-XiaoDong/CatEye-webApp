<template>
  <div class="cinema">
<!-- 顶部 -->
    <Top-bar :title="title" :more_show="more_show" />
<!-- 搜索 -->
    <div class="cinema__search">
      <div class="cinema__city">
        <router-link to='/city' tag="span">{{ curCity }}</router-link>
        <i class="iconfont icon-f11"></i>
      </div>
      <div class="cinema__input">
        <router-link to="/search" tag="div">
          <i class="iconfont icon-sousuo"></i> 搜影院</router-link
        >
      </div>
    </div>
<!-- 导航 -->
    <div class="cinema__nav">
      <div class="cinema__item cinema__allcity" @click="showPopup('allcity')">
        全城
      </div>
      <div class="cinema__item cinema__brand" @click="showPopup('brand')">
        品牌
      </div>
      <div
        class="cinema__item cinema__characteristic"
        @click="showPopup('characteristic')"
      >
        特色
      </div>

      <!-- 点击导航 浮层展示 -->
      <div class="cinema__show" v-if="popup">
        <allcity-show v-if="isallcity" :choiceCondition="choiceCondition" />
        <brand-show v-if="isBrand" />
        <Characteristic-show v-if="isCharacteristic" />
      </div>
    </div>
<!-- 影院展示 -->
    
  <cinema-list :cinemaArr="cinemaArr" @getCinema="getCinema"/>

<!-- 底部 -->
    <my-foot />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import TopBar from "@/components/common/TopBar.vue";
import MyFoot from "@/components/common/Foot.vue";
import AllcityShow from "@/components/CinemaChoiceRegion.vue";
import BrandShow from "@/components/CinemaBrand.vue";
import CharacteristicShow from "@/components/CinemaCharacteristic.vue";
import CinemaList from "@/components/CinemaList.vue";
import mockapi from '@/api/mockapi.js';
export default {  
  /* {
    day：2020-04-06
    offset：40
    limit：20
    districtId：-1
    lineId：-1
    hallType：-1
    brandId：-1
    serviceId：-1
    areaId：-1
    stationId：-1
    item：updateShowDayfalse
    reqId：1586176218200
    cityId：40
    optimus_uuid：C78940406FEB11EAA83D3D0EDA30E0B86338F50D476A40ADA28FE5F4793DEA5D
    optimus_risk_level：71
    optimus_code：10
  }
  
  */
  data() {
    return {
      title: "影院",
      more_show: true,
      isallcity: false, // 点击全城
      isBrand: false, // 点击品牌
      isCharacteristic: false, // 点击特色
      popup: false, // 浮层是否展示
      type: "", // 点击了谁让浮层显示的
      choiceCondition: {
        choiceTitle: ["商区", "地铁站"],
        active: "商区"
      },
      cinemaArr: [], // 当前的电影列表
      filterCinema:{
        city:this.curCity,  // 城市


      }, // 请求电影列表的参数
    };
  },
  // 初始化完成后请求数据
  created () { // 请求19条数据
    mockapi.getCinemaList().then(res => {
      this.cinemaArr = res.data;
    });
  },
  computed : {
    ...mapState(['curCity']),
  },
  components: {
    TopBar,
    MyFoot,
    AllcityShow,
    BrandShow,
    CharacteristicShow,
    CinemaList,
  },
  methods: {
    /**
     * 根据筛选条件获取影院列表
     */
    getCinema() {
      mockapi.getCinemaList().then(res => {
        this.cinemaArr = [...this.cinemaArr, ...res.data];
        console.log(this.cinemaArr)
      });
    },
    /**
     * 控制浮层是否显示(全城，品牌，特色)
     * @param type {string} 点击的是谁从而决定显示的是那个浮层
     */
    showPopup(type) {
      if (this.type === type) {
        this.popup = !this.popup;
        return;
      } else if (type === "") {
        console.log(this.type);
        this.popup = false;
        this.type = type;
        return;
      }
      this.type = type;
      if (this.type === "") {
        this.isallcity = false; // 点击全城
        this.isBrand = false; // 点击品牌
        this.isCharacteristic = false; // 点击特色
      } else if (this.type === "allcity") {
        this.isallcity = true; // 点击全城
        this.isBrand = false; // 点击品牌
        this.isCharacteristic = false; // 点击特色
      } else if (this.type === "brand") {
        this.isallcity = false; // 点击全城
        this.isBrand = true; // 点击品牌
        this.isCharacteristic = false; // 点击特色
      } else if (this.type === "characteristic") {
        this.isallcity = false; // 点击全城
        this.isBrand = false; // 点击品牌
        this.isCharacteristic = true; // 点击特色
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cinema__search {
  height: 44px;
  display: flex;
  background-color: #f5f5f5;
  justify-content: space-between;
  .cinema__city {
    flex: 0 0;
    padding-left: 0.3rem;
    font-size: 0.3rem;
    color: #666;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 1.7rem;
    }
    .icon-f11 {
      width: 0.16rem;
      height: 0.16rm;
      font-size: 0.3rem;
    }
  }
  .cinema__input {
    flex: 1 1 auto;
    margin: 0 0.3rem 0 0.36rem;
    padding: 8px 0;

    div {
      height: 28px;
      text-align: center;
      line-height: 28px;
      background-color: #fff;
      border-radius: 0.1rem;
      color: #b2b2b2;
      .icon-sousuo {
        font-size: 0.3rem;
      }
    }
  }
}

.cinema__nav {
  width: 100%;
  height: 0.8rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: 999;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #e8e8e8;
    transform: scaleY(0.5);
  }
  .cinema__item {
    width: 2.4rem;
    text-align: center;
    line-height: 0.4rem;
    padding: 0.2rem;
    font-size: 0.26rem;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.cinema__brand::after {
      content: "";
      float: right;
      height: 100%;
      border-right: 1px solid #e8e8e8;
    }
    &.cinema__brand::before {
      content: "";
      float: left;
      height: 100%;
      border-right: 1px solid #e8e8e8;
    }
  }

  .cinema__show {
    position: absolute;
    top: 0.8rem;
    left: 0;
    right: 0;
    height: calc(100vh - 2.69rem);
    background-color: rgba(0, 0, 0, 0.5);
  }
}

// .show__cinema {
//   width: 7.16rem;
//   position: absolute;
//   top: 2.68rem;
//   bottom: 53px;
//   overflow: auto;
//   li {
//     padding: 13px 15px 13px 0;
//     min-height: 1.96rem;
//     margin-left: 15px;
//     background-color: #fff;
//     position: relative;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     border-bottom: 1px solid #e8e8e8;
//     .cinema__name {
//       height: 0.46rem;
//       line-height: 0.46rem;
//       font-size: 0.32rem;
//       color: #000;
//       font-weight: bolder;
//     }
//     .cinema__address {
//       display: flex;
//       font-size: 0.26rem;
//       color: #666;
//       justify-content: space-between;
//       .address {
//         text-overflow: ellipsis;
//         overflow: hidden;
//         white-space: nowrap;
//       }
//     }
//     .cinema__tag {
//       height: 0.34rem;
//       line-height: 0.34rem;
//       margin-top: 0.08px;
//       margin-bottom: 0.08px;
//       overflow: hidden;
//       font-size: 0;
//       flex-shrink: 0;
//       div {
//         position: relative;
//         display: inline-block;
//         padding: 0 0.1rem;
//         height: 0.3rem;
//         line-height: 0.3rem;
//         border-radius: 0.04rem;
//         font-size: 0.28rem;
//         margin-right: 0.1rem;
//         &.allowRefund,
//         &.endorse {
//           color: #589daf;
//           border: 1px solid #589daf;
//         }
//         &.snack,
//         &.vip {
//           color: #f90;
//           border: 1px solid #f90;
//         }
//       }
//     }
//     .cinema__youhui {
//       font-size: 0.26rem;
//       color: #666;
//     }
//   }
// }
</style>
