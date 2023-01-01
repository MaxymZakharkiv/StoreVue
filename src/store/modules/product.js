import {getItems, getDetailItems} from '@/api/product'


const productModule = {
    namespaced: true,
    state:{
        products:[],
        isLoading: false,
        error:[]
    },
    mutations:{
        LOADING(state, bool){
          state.isLoading = bool
        },
        GET_PRODUCT(state, products){
            state.products = products
        },
        ERROR_LIST(state, error){
            state.error = error
        }
    },
    actions:{
        async getProduct({commit}, offset=0) {
            try {
                commit('LOADING', true)
                const response = await getItems(offset)
                console.log(response.data.results)
                commit('GET_PRODUCT', response.data.results)
                commit('LOADING', false)
            } catch (e) {
                console.log(e)
                commit('ERROR_LIST', e)
            }
        },
        async getDetailProduct({ commit }, data){
            console.log(data)
            try {
                commit('LOADING', true)
                const response = await getDetailItems(data.category, data.offset)
                commit('GET_PRODUCT', response.data.results)
                commit('LOADING', false)
            } catch (e) {
                console.log(e)
                commit('ERROR_LIST', e)
            }
        }
    },
    getters:{}
}


export default productModule