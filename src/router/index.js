import { createRouter, createWebHistory } from 'vue-router'
import MainCard from '../pages/MainCard.vue'
import PostPage from '@/pages/PostPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import PostPageStore from '@/pages/PostPageStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainCard
    },
    {
      path: '/posts',
      component: PostPage
    },
    {
      path: '/posts/:id',
      component: PostIdPage
    },
    {
      path: '/store',
      component: PostPageStore
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
