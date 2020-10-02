const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('hello world')
})
app.post('/', function (req, res) {
    console.log(req.body)
    res.send('Got a POST request')
})
app.put('/', function (req, res) {
    console.log(`actualizar ${req.body}`)
    res.send('Got a PUT request at /user')
})
app.delete('/', function (req, res) {
    console.log(`eliminar ${req.body}`)
    res.send('Got a DELETE request at /user')
})
//There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
//You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.
app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from B!')
})
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})