const isBrowser = !!global.document
const isServer = !isBrowser

export default {
  isBrowser,
  isServer,
}
