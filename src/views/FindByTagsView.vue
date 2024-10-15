<template>
    <div id="wrapper">
      <h2>Search Posts</h2>
      <input type="text" v-model="searchQuery" placeholder="Enter tags (comma-separated)">
      <button @click="searchPosts">Search</button>
  
      <ul>
        <li v-for="post in filteredPosts" :key="post.id">
          <a :href="`/posts/${post.id}`">{{ post.title }}</a>
        </li>
      </ul>
    </div>
  </template>


<script>
export default {
  data() {
    return {
      searchQuery: '',
      filteredPosts: []
    };
  },
  methods: {
    searchPosts() {
      const tags = this.searchQuery.split(',').map(tag => tag.trim());

      fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(posts => {
          this.filteredPosts = posts.filter(post => {
            return tags.every(tag => post.tags.includes(tag));
          });
        })
        .catch(err => console.error(err));
    }
  },
  async created() {
    this.searchQuery = this.$route.query.tag || '';
    this.filteredPosts = this.searchPosts();
  }
};
</script>