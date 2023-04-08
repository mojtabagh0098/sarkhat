// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useCookieStore } from '@/stores/cookie'



const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true }

      },
      {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Login.vue'),
        meta: { requiresAuth: false }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


// router.beforeEach((to, from, next) => {
//   // we wanted to use the store here
//   const cookie = useCookieStore()
//   if (cookie.logged) next()
//   else next('/login')
// })

router.beforeEach((to,from,next) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const cookie = useCookieStore()
    
  if (to.meta.requiresAuth && !cookie.logged){ 
    console.log(to.meta.requiresAuth);
    next ({
      path: 'login',
      // save the location we were at to come back later
    })
  }
    else {next()}
})

export default router
