import http from "@/http";


const GET_PRODUCTS = 'shop/product/'
// const GET_CATEGORIES = 'shop/categories/'
const GET_PRODUCTS_BY_CATEGORIES = 'shop/product/category/'


export const getItems = (offset) => {
    return http.get(GET_PRODUCTS, {params:{offset: offset}})
}

export const getDetailItems = (params, offset) => {
    return http.get(GET_PRODUCTS_BY_CATEGORIES+`${params}/`, {params:{offset: offset}})
}
