<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body.substring(0, 50) }}...</p>
    <p>Tags: {{ post.tags.join(', ') }}</p>
    <router-link :to="`/posts/${post.id}`">Read more</router-link>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
