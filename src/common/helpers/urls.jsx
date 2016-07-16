const production = {
  USER_LOGIN: '/user/login.do',
}

const development = {
  USER_LOGIN: 'http://rap.upesn.me/mockjs/1/user/login.do',
}

export default process.env.NODE_ENV === 'production' ?
  production :
  development
