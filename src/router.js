import toRegex from 'path-to-regexp'

function matchURI(path, uri) {
  const keys = []
  const pattern = toRegex(path, keys) // TODO: Use caching
  const match = pattern.exec(uri)
  if (!match) return null
  const params = Object.create(null)
  for (let index = 1; index < match.length; index++) {
    params[keys[index - 1].name] =
      match[index] !== undefined ? match[index] : undefined
  }
  return params
}

async function resolve(routes, context) {
  for (const [key, route] of Object.entries(routes)) {
    const uri = context.error ? '/error' : context.pathname
    const params = matchURI(route.path, uri)
    if (!params) continue
    const result = await route.action({ ...context, params })
    if (result) return result
  }
  const error = new Error('Not found')
  error.status = 404
  throw error
}

export default { resolve }
