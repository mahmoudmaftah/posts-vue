<template>
  <div id="wrapper">
    <h2>Create a New Post</h2>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="title" required />
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea v-model="body" required></textarea>
      </div>
      <div>
        <label for="tags">Tags:</label>
        <input type="text" v-model="tags" placeholder="comma separated" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style>



form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

label {
  font-weight: bold;
}

h2 {
  margin-bottom: 1rem;
}

div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

div > * {
  margin-bottom: 0.5rem;
}

div > *:last-child {
  margin-bottom: 0;
}

div > input[type='text'],
div > textarea {
  border: 1px solid #ccc;
}

div > input[type='text']:focus,
div > textarea:focus {
  outline: none;
  border-color: #333;
}

div > button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

div > button:hover {
  background-color: #0056b3;
}

div > button:active {
  background-color: #004286;
}

div > button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #007bff;
}

div > button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

</style>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      tags: ''
    };
  },
  methods: {
    submitPost() {
      const newPost = {
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim())
      };

      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Post added:', data);
          this.$router.push('/');
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
