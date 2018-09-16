import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  // ...
};

export const actions = {

};

export const state = {
  post: null,
  postList: Array.apply(null, {length: 10}).map(Number.call, Number),
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
})

