import useSWR from 'swr'

export async function fetcher(url) {
  const response = await fetch(url)
  return response.json()
}

export function useGetHello() {
  return useSWR('/api/hello', fetcher)
}

export function useGetBlogs() {
  return useSWR(`/api/blogs`, fetcher)
}
