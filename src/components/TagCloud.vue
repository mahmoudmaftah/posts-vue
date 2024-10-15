<template>
    <div class="tag-cloud">
      <h3>Tags</h3>
      <ul>
        <li v-for="tag in tags" :key="tag">
          <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
        </li>
      </ul>
    </div>
  </template>



<style>

.tag-cloud {
  margin: 2rem 0;
  padding: 1rem;
}

.tag-cloud h3 {
  margin-bottom: 1rem;
}

.tag-cloud ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.tag-cloud li {
  width: 100px;
  list-style: none;
}

.tag-cloud a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.tag-cloud a:hover {
  background-color: #5aed90;
  color: white;
}


</style>
  
  <script>
  export default {
    name: 'TagCloud',
    props: {
      tags: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  