import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import FindByTagsView from '../views/FindByTagsView.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreatePostView },
  { path: '/posts/:id', component: PostDetailView },
  { path: '/tags/:tag', component: FindByTagsView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
