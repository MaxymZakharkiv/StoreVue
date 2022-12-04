const routes = [
    {
      path: '/',
      name: 'common-layout',
      component: () => import('@/layouts/CommonLayout'),
      children:[
          {
              path: '/',
              name:'main-page',
              component: () => import('@/views/MainPage')
          },
          {
              path: '/detail-categories/:slug',
              name:'detail-category',
              component: () => import('@/views/Product/DetailCategoryProducts')
          },
          {
              path:'/detail-Product/:slug',
              name:'product-detail',
              component: () => import('@/views/Product/DetailProduct')
          }
      ]
    },
    {
        path:'/auth',
        name:'auth-layout',
        component: () => import('@/layouts/AuthLayout'),
        children: [
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
        ]
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notFound',
        component: () => import('@/views/NotFound')
    }
]


export default routes