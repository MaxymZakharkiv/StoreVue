import http from "@/http";


export const getCategories = (url) => {
    return http.get(url)
}