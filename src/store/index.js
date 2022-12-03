import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCategory: null
  },
  getters: {
    getCategory(state){
      return state.selectedCategory
    }
  },
  mutations: {
    CHANGE_CATEGORY(state, category){
      state.selectedCategory = category
    }
  },
  actions: {
    changeCategory({commit}, category){
      commit('CHANGE_CATEGORY', category)
    }
  },
  modules: {
  }
})
