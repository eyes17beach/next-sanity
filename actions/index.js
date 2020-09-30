import useSWR from 'swr'

function fetcher(url) {
  fetch(url).then((response) => response.json())
}

function useGetHello() {
  return useSWR('/api/hello', fetcher)
}

function useGetBlogs() {
  return useSWR('/api/blogs', fetcher)
}

export { useGetHello, useGetBlogs }
