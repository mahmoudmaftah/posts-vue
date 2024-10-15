<template>
  <div id="cont">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <TagCloud :tags="post.tags" />
  </div>
</template>

<style>

  #cont  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
    border: 1px solid #ccc;
  }

 

</style>


<script>
import { getPost } from '../composables/getPost' // Assuming composables folder
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'PostDetailView',
  components: { TagCloud },
  data() {
    return {
      post: {}
    }
  },
  async created() {
    const postId = this.$route.params.id; // Use destructuring
    try {
      this.post = await getPost(postId);
    } catch (error) {
      console.error('Error fetching post:', error);
      // Handle error gracefully, e.g., redirect to error page
    }
  }
}
</script>