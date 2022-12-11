import http from "@/http";


export const getItems = (url, offset) => {
    return http.get(url, {params:{offset: offset}})
}

export const getDetailItems = (url, params) => {
    return http.get(url+`${params}/`)
}
