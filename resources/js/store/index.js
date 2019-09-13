import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        loggedIn: !!localStorage.getItem('token'),
        information: {},
        posts: [],
        postPage: 1
      },
    
      getters:{
        getInformation: state => state.information,
        getPosts: state => state.posts
      },
      
      actions:{
        async setInformation({commit}, payload) {
          commit('SET_INFORMATION', await payload)
        },
        async setPosts({commit}, payload) {
          commit('SET_POSTS', await payload)
        },
        async updatePosts({commit}, payload) {
          commit('UPDATE_POSTS', await payload)
        }
      },
    
      mutations:{
        LOGIN (state) {
          state.isLoggedIn = true
        },
        LOGOUT (state) {
          state.isLoggedIn = false
        },
        SET_INFORMATION: (state, payload) => {
          state.information = payload
        },
        SET_POSTS: (state, payload) => {
          state.posts = payload
        },
        UPDATE_POSTS: (state, payload) => {
          payload.forEach(post => {
            state.posts.push(post) 
          })

          state.postPage += 1;
        }
      },
})

export default store