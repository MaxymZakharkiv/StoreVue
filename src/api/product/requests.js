import http from "@/http";


const getItems = (url) => {
    return http.get(url)
}

const getDetailItems = (url, params) => {
    return http.get(url+`${params}/`)
}


export default {
    getItems, getDetailItems
}