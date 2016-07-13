const myFetch = method => (url = '', attr = null) => fetch(url, {
  method,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: attr ? JSON.stringify(attr) : null,
}).then(response => response.json())

export const get = myFetch('get')
export const post = myFetch('post')
export const put = myFetch('put')
export const del = myFetch('delete')
