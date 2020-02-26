const config = {
  production: {
    PORT: process.env.PORT
  },
  default: {
    PORT: '5000',
    HOST: 'localhost'
  }
} 

exports.get = function get(env) {
  return config[env] || config.default
}