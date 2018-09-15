import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const mutations = {
  // ...
};

export const actions = {
  async fetchPosts({ commit }) {
    const response = await graphqlClient.query({
      query: gql`
        query BookList {
          bookList {
            id
            title
            author
            description
          }
        }
      `,
    });

    // Trigger the `setBookList` mutation
    // which is defined above.
    commit('setBookList', response.data.bookList);
  },};

export const state = {
  post: null,
  postList: Array.apply(null, {length: 10}).map(Number.call, Number),
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions:actions
})

