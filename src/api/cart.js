import http from "@/http";


const GET_CART_CUSTOMER = 'shop/cart/get_current_cart_customer/'
const CHANGE_COUNT_GOODS_IN_CART = 'shop/cart/change-count-cart-product/'
const DELETE_GOODS_FROM_CART = 'shop/cart/delete-from-cart/'


export const getCart = () => {
    return http.get(GET_CART_CUSTOMER)
}

export const changeCountGoods = (data) => {
    return http.patch(CHANGE_COUNT_GOODS_IN_CART+`${data.id}/${data.count_product}/`)
}

export const deleteGoods = (id) => {
    return http.post(DELETE_GOODS_FROM_CART+`${id}/`)
}