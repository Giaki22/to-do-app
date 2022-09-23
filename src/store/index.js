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
          createdBy: "Gianluca"
      },
      {
          taskName: "Allenarsi con vue",
          taskCompleted: true,
          taskArchived: false,
          createdBy: "Gianluca"
      },
      {
          taskName: "Example Task Archiviata",
          taskCompleted: true,
          taskArchived: true,
          createdBy: "Unknown"
      },
    ],
    activeUser: "",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
