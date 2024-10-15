import axios from 'axios'

export async function getPosts() {
  try {
    const response = await axios.get('http://localhost:3000/posts')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}
