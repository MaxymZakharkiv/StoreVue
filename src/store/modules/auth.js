import { signInUser } from '@/api/auth'


const authModule = {
    namespaced: true,
    state:{
        isLoading:false,
        error: []
    },
    mutations:{
        IS_LOADING(state, bool){
            state.isLoading = bool
        },
        ERROR_AUTH(state, error){
            state.error = error
        }
    },
    actions:{
        async signInUser({ commit }, data) {
            try{
                commit('IS_LOADING', true)
                const response = await signInUser(data)
                localStorage.setItem('access_token', response.data.access)
                localStorage.setItem('refresh_token', response.data.refresh)
                commit('IS_LOADING', false)
            } catch (e) {
                commit('ERROR_AUTH', e)
                console.log(e)
            }
        }
    },
    getters:{
        getIsLoading(state) {
            return state.isLoading;
        },
        getError(state){
            return state.error
        }
    }
}


export default authModule