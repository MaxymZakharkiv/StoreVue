import http from "@/http";

export const SIGN_IN = 'auth/jwt/jwt/create/'
export const SIGN_UP = 'auth/users/'


export const signInUser = (dataSignIn) => {
    return http.post(SIGN_IN, dataSignIn)
}

export const signUpUser = (dataSignIn) => {
    return http.post(SIGN_UP, dataSignIn)
}