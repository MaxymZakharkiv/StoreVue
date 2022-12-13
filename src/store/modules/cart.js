import {getCart, changeCountGoods, deleteGoods} from '@/api/cart'


const cartModule = {
    namespaced:true,
    state:{
        isLoading: false,
        error: [],
        cart_products: null,
        total_price: 0
    },
    mutations:{
        CHANGE_TOTAL_PRICE(state, value){
            state.total_price += value
        },
        GET_CART_CUSTOMER(state, cart){
            state.cart_products = cart
        },
        ERROR_CART(state, error){
            state.error = error
        },
        LOADING(state, bool){
            state.isLoading = bool
        },
        DELETE_GOODS_FORM_CART(state, id){
            state.cart_products = state.cart_products.filter(i => i.id !== id)
            state.total_price = state.cart_products.reduce((sum, item) => {
                return sum + Number(item.all_price)
            }, 0)
        }
    },
    actions:{
        async getCart({commit}){
            try{
                commit('LOADING', true)
                const response = await getCart()
                commit('GET_CART_CUSTOMER', response.data.products)
                let sum = response.data.products.reduce((sum, item) => {
                    return sum + Number(item.all_price)
                }, 0)
                commit('CHANGE_TOTAL_PRICE', sum)
                commit('LOADING', false)
            } catch (e) {
                commit('ERROR_CART', e)
            }
        },
        async changeCountProduct({commit}, data){
            try{
                commit('LOADING', true)
                await changeCountGoods({id:data.id, count_product: data.count_product})
                commit('CHANGE_TOTAL_PRICE', data.price)
                commit('LOADING', false)
            } catch (e) {
                commit('ERROR_CART', e)
            }
        },
        async deleteProductFromCart({commit}, id){
            try {
                commit('LOADING', true)
                await deleteGoods(id)
                commit('DELETE_GOODS_FORM_CART', id)
                commit('LOADING', false)
            } catch (e) {
                commit('ERROR_CART', e)
            }
        }
    },
    getters:{
        getTotalPrice(state){
            return state.total_price
        },
        getCartCustomer(state){
            return state.cart_products
        }
    }
}

export default cartModule
