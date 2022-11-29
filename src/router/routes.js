const routes = [
    {
        path:'/sign-in',
        name:'sign-in',
        component: () => import('@/views/Auth/SignIn')
    },
    {
        path:'/sign-up',
        name:'sign-up',
        component: () => import('@/views/Auth/SignUp')
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notFound',
        component: () => import('@/views/NotFound')
    }
]


export default routes