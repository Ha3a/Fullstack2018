if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

let port = 3003
let mongoUrl = 'mongodb://test:test@ds149138.mlab.com:49138/fullmatti'

if (process.env.NODE_ENV === 'test') {
  port = 3003
  mongoUrl = 'mongodb://test:test@ds149138.mlab.com:49138/fullmatti'
}

module.exports = {
  mongoUrl,
  port
}