import { createStore } from 'vuex'
import authModule from "@/store/modules/auth";
import productModule from "@/store/modules/product";
import cartModule from '@/store/modules/cart';
import categoryModule from "@/store/modules/category";

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
    auth: authModule,
    product: productModule,
    cart: cartModule,
    category: categoryModule
  }
})
