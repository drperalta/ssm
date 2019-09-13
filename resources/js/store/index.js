import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        loggedIn: !!localStorage.getItem('token'),
        information: {},
      },
    
      getters:{
        getInformation: state => state.information
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
          state.information = payload
        },
      },
})

export default store