import http from "@/http";

const authUser = (url,dataSignIn) => {
    return http.post(url, dataSignIn)
}

export default {
    authUser
}