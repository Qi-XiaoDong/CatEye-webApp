<template>
   <div class="city">
<!-- 定位城市 -->
        <div class="city__item">
            <div class="city__title" id="location">定位城市</div> 
            <div class="city__list">
                <div class="city__name ">{{ locationCity }}</div>
            </div>
        </div>
<!--最近访问城市  -->
        <div class="city__item">
            <div class="city__title" id="lately">最近访问城市</div> 
            <div class="city__list">
                <div class="city__name"
                    v-for="cityinfo in hotCityList"
                    :key="cityinfo.name"
                    @click="selectCity(cityinfo.name)"
                >{{ cityinfo.name }}</div>
            </div>
        </div>
<!-- 热门城市 -->
        <div class="city__item">
            <div class="city__title" id="hot">热门城市</div> 
            <div class="city__list">
                <div class="city__name"
                    v-for="cityinfo in recentList"
                    :key="cityinfo.name"
                    @click="selectCity(cityinfo.name)"
                >{{ cityinfo.name }}</div>
            </div>
        </div>

 <!--城市列表  -->
       <div class="city__item">
            <dl class='city__dl'
                v-for="(cityArr,rank) in cityObj"
                :key=rank
            >
                <dt class="city__title" :id="rank">{{rank}}</dt>
                <dd class="city__listName"
                    v-for="city in cityArr"
                    :key=city.id
                    @click="selectCity(city.name)"
                >{{city.name}}</dd>
            </dl>

       </div>
<!-- 定位锚点 -->
       <div class="city__href">
           <a href="#location">定位</a>
           <a href="#lately">最近</a>
           <a href="#hot">热门</a>
           <a :href="'#' + word" 
                v-for="word in wordArr"
                :key="word"
            >{{ word }}</a>
       </div>
   </div>
</template>

<script>
import api from '@/api';

export default {
    /** 记录是由那个路由进入的*/
    beforeRouteEnter (to, from, next) {
        next( vm => {
            vm.backUrl = from.path;
        });
    },

    data () {
        return {
            backUrl:'',  // 记录是由那个路由进入的
            cityObj :  {},  // 根据首字母得到的城市列表
            hotCityList : [],  // 热门城市里列表
            recentList : [],  // 最近访问城市 
            wordArr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),// 字母锚点数组
            locationCity: '定位失败请重试'
        }
    },

    created () {
        //  根据首字母得到的城市列表
        api.getCityList().then((res) => {
            res.data.data.forEach((ele)=> {
                var rank = ele.firstChar.toUpperCase(); // 城市首字母
                if (!this.cityObj[rank]) {
                    this.cityObj[rank] = [];
                    this.cityObj[rank].push({name:ele.name, id : ele.id});
                }else{
                    this.cityObj[rank].push({name:ele.name, id : ele.id});
                }
            });
        });
        // 热门城市列表
        api.getHotCityList().then(res => {
            this.hotCityList = res.data.data;
        });
        // 最近访问城市列表
        api.getRecents().then( res => {
            this.recentList = res.data.data;
        });
    },
    methods: {
        /**
         * 选中城市后返回进入city的路由
         */
        selectCity (cityName) {
            this.$store.commit('changeCtiy', cityName);
            this.$router.push(this.backUrl);
        }
    }
}
</script>

<style lang="less" scoped>
dl,dt,dd{
    margin: 0;
    padding: 0;
}
.city{
    padding-right: 0.3rem;
    font-size: 0.28rem;
    color:#333;
    background-color: #ebebeb;
    position: relative;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    &::-webkit-scrollbar{
        display: none;
    } 
    overflow-x: auto;
    .city__title {
        padding-left: 0.5rem;
        line-height: 0.6rem;
        background-color: #ebebeb;
        
    }
    .city__list{
        background-color: #f5f5f5;
        padding: 0.3rem 0  0 0.5rem;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
    }
    .city__name{
        flex: 0 0 auto;
        margin:0 0.2rem 0.2rem 0;
        width: 29%;
        height: 33px;
        background-color: #ffff;
        border:1px solid #e6e6e6;
        line-height: 33px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .city__dl{
        background-color: #f5f5f5;
        padding:0 0  0 0.5rem;
        box-sizing: border-box;
        .city__title{
            padding-left: 0.5rem;
            margin-left: -0.5rem;
        }
    }
    .city__listName{
        padding-right: 0.3rem;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #c8c7cc;
    }

    .city__href{
        position: fixed;
        top: 10px;
        right: 5px;
        a{
            display: block;
            text-align: center;
            color:inherit;
            padding:2px 0
        }
    }
}
</style>