<template>
  <div class="singlepost">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    <TagCloud :tags="tags" />
  </div>
</template>



<style>



.singlepost {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  max-width: 1600px;
}

.singlepost > * {
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(252, 39, 39, 0.1);
  width: 40%;
  align-items: center;

}







</style>

<script>
import SinglePost from './SinglePost.vue'
import TagCloud from './TagCloud.vue'

export default {
  name: 'PostList',
  components: { SinglePost, TagCloud },
  data() {
    return {
      posts: [],
      tags: []
    }
  },
  created() {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
        this.extractTags(data);
      })
      .catch(err => console.error(err));
  },
  methods: {
    extractTags(posts) {
      const tagsSet = new Set();
      posts.forEach(post => post.tags.forEach(tag => tagsSet.add(tag)));
      this.tags = Array.from(tagsSet);
    }
  }
}
</script>
