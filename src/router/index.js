import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/barangmasuk',
      name: 'BarangMasuk',
      component: () => import('../views/BarangMasuk.vue')
    },
    {
      path: '/barangkeluar',
      name: 'BarangKeluar',
      component: () => import('../views/BarangKeluar.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterForm.vue')
    },
    {
      path: '/stockopname',
      name: 'StockOpname',
      component: () => import('../views/StockOpname.vue')
    },
    {
      path: '/pengiriman',
      name: 'Pengiriman',
      component: () => import('../views/Pengiriman.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/riwayatpengiriman',
      name: 'RiwayatPengiriman',
      component: () => import('../views/RiwayatPengiriman.vue')
    },
    {
      path: '/detailpengiriman',
      name: 'DetailPengiriman',
      component: () => import('../views/DetailPengiriman.vue')
    },
    {
      path: '/barangmaster',
      name: 'barangmaster',
      component: () => import('../views/MasterBarang.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CustomerView.vue')
    },
  ]
})

export default router
