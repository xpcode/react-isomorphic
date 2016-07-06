const isBrowser = (
  typeof window !== 'undefined' &&
  typeof global === 'object'
)
const isServer = !isBrowser

export default {
  isBrowser,
  isServer,
}
