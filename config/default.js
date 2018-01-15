module.exports = {
  port: 9000,
  proxy: {
    target: 'http://172.19.3.186:25001',
    apiVersion: '/api/v2'
  }
}