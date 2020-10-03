import { getAllBlogs } from 'lib/api'

export default async function (req, res) {
  const data = await getAllBlogs()
  res.status(200).json(data)
}
