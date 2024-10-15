<template>
  <nav id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/create">Add Post</router-link>
    <router-link to="/tags">Tags</router-link>

  </nav>
</template>

<style>

#navbar {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

#navbar a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#navbar a:hover {
  background-color: #5aed90;
  color: white;
}



</style>


<script>
export default {
  name: 'NavBar'
}
</script>
