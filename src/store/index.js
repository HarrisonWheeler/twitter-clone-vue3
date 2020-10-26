import { createStore } from 'vuex'

export default createStore({
  state: {
    activeNews: [],
  },
  mutations: {
    setActiveNews(state, activeNews) {
      state.activeNews = activeNews
    }
  },
  actions: {
  },
  modules: {
  }
})
