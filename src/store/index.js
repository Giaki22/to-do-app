import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
          taskName: "Fare la Spesa",
          taskCompleted: false,
          taskArchived: false,
      },
  ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
