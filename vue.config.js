var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    VUE_APP_ACCESS_KEY: JSON.stringify(process.env.VUE_APP_ACCESS_KEY),
    VUE_APP_SECRET_KEY: JSON.stringify(process.env.VUE_APP_SECRET_KEY)
})