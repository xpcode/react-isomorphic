const envs = {
  development: {
    SCRIPT_BASEURL_DEV: 'http://localhost:3004',
    SCRIPT_BASEURL_PROD: ''
  }
}

export default envs[process.env.NODE_ENV] || envs['production']
