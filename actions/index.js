import useSWR from 'swr'

function fetcher(url) {
  fetch(url).then((response) => response.json())
}

function getHello() {
  return useSWR('/api/hello', fetcher)
}

export { getHello }
