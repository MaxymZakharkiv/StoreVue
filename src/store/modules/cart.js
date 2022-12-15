import {getCart, addGoods, changeCountGoods, deleteGoods} from '@/api/cart'


const cartModule = {
    namespaced:true,
    state:{
        isLoading: false,
        error: [],
        cart_products: [],
        total_price: 0
    },
    mutations:{
        CHANGE_TOTAL_PRICE(state, value){
            state.total_price += value
        },
        GET_CART_CUSTOMER(state, cart){
            state.cart_products = cart
            state.total_price =  cart.reduce((sum, product) => {
                return sum + Number(product.all_price)
            }, 0)
        },
        ERROR_CART(state, error){
            state.error = error
        },
        LOADING(state, bool){
            state.isLoading = bool
        },
        ADD_TO_CART(state, product){
            state.cart_products.push(product)
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
                console.log(response)
                commit('GET_CART_CUSTOMER', response.data.products)
                commit('LOADING', false)
            } catch (e) {
                commit('ERROR_CART', e)
            }
        },
        async addToCart({commit}, product){
            try{
                commit('LOADING', true)
                await addGoods(product.id)
                commit('ADD_TO_CART', product)
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
        getCartCustomer(state){
            return state.cart_products
        },
        getTotalPrice(state){
            return state.total_price
        }
    }
}

export default cartModule
