import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: {
      getPosition: null,
      click: null,
    },
    global: {
      path: [],
      availableModes: ['editor', 'navi', 'sim'],
      mode: 'editor'
    }
  },
  getters: {
    displayData(state) {
      return state.global.path.map(point => ({ type: 'point', point, color: '#f00' }))
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
