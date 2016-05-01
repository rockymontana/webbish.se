var express = require('express')
var path = require('path')
var config = require('../webpack.config.js')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express()

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static('./build'))
//app.use('/assets/images/', express.static('../'))
//require.context("assets/images", true, /^\.\/.*\.(jpg|svg|png)/)

app.use('/', function (req, res) {
    res.sendFile(path.resolve(__dirname,'../client/index.html'))
})

const port = 3100
app.listen(port, function(error) {
  if (error) {
    console.debug(error)
  }
  console.log("Express server listening on port", port)
}).on('error', function(err) { 
  console.log(err)
})
