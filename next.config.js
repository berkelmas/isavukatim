// next.config.js
module.exports = {
  publicRuntimeConfig: { // Will be available on both server and client
    mediaURL: 'http://localhost:8000/media/',
    apiEndpoint: 'http://localhost:8000/'
  }
}
