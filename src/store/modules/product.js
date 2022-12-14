import {getItems, getDetailItems} from '@/api/product'


const productModule = {
    namespaced: true,
    state:{
        product:[],
        isLoading: false,
        error:[]
    },
    mutations:{
        LOADING(state, bool){
          state.isLoading = bool
        },
        GET_PRODUCT(state, product){
            state.product = product
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
    getters:{
        getProductState(state){
            return state.product
        },
        getIsLoading(state){
            return state.isLoading
        }
    }
}


export default productModule