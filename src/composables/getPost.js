import axios from 'axios'

export async function getPost(id) {
  try {
    const response = await axios.get(`http://localhost:3000/posts/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}
