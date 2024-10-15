<template>
<div id="container">
  <PostList />
</div>
</template>


<style>

#container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}



</style>


<script>
import PostList from '../components/PostList.vue'

export default {
name: 'Home',
components: { PostList }
}
</script>
