import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curCity : '北京',
  },
  mutations: {
    changeCtiy (state, payload) {
      state.curCity = payload;
    }
  },
  actions: {},
  modules: {}
});
