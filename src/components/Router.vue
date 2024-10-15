<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreatePostView },
  { path: '/posts/:id', component: PostDetailView },
  { path: '/tags/:tag', component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
</script>
