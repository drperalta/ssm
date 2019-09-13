import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        loggedIn: !!localStorage.getItem('token'),
        user: {},
      },
    
      getters:{
        getInformation: state => state.user
      },
      
      actions:{
        async setInformation({commit}, payload) {
          commit('SET_INFORMATION', await payload)
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
          state.user = payload
        },
      },
})

export default store