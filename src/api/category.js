import http from "@/http";


const GET_CATEGORIES = 'shop/categories/'

export const getCategories = (url) => {
    return http.get(GET_CATEGORIES)
}