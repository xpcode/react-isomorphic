const isBrowser = (
  typeof window !== 'undefined' &&
  typeof global === 'undefined'
)
const isServer = !isBrowser

export default {
  isBrowser,
  isServer,
}
