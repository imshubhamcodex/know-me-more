import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    agreeDisagree: [],
    yesNo:[],
    scene:[],
    your_name :"",
    partner_name:""
  },
  mutations: {
    setAgreeDisagree(state, payload) {
      const { qid, p1_data, p2_data } = payload;
      state.agreeDisagree = state.agreeDisagree.filter(
        (ele) => ele.qid !== qid
      );
      state.agreeDisagree.push({ qid, p1_data, p2_data });
    },
    setYesNo(state, payload) {
      const { qid, p1_data, p2_data } = payload;
      state.yesNo = state.yesNo.filter(
        (ele) => ele.qid !== qid
      );
      state.yesNo.push({ qid, p1_data, p2_data });
    },
    setScene(state, payload) {
      const { qid, p1_data, p2_data } = payload;
      state.scene = state.scene.filter(
        (ele) => ele.qid !== qid
      );
      state.scene.push({ qid, p1_data, p2_data });
    },
    setYourName(state, payload){
      state.your_name = payload
    },
    setPartnerName(state, payload){
      state.partner_name = payload
    }
  },
});

export default store;
