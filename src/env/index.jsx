var envs = {
  development: {
    SCRIPT_BASEURL_DEV: 'http://localhost:3004',
    SCRIPT_BASEURL_PROD: ''
  }
}

module.exports = envs[process.env.NODE_ENV] || envs['production']
