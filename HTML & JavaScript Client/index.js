var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var router = express.Router()


app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname + 'public')))

// //app.use(express.bodyParser({limit:'50mb'}))
// app.use("/PATH_WITH_LIMIT", bodyParser({
    
//     limit: 1024 * 1024 * 1024  * 1024// 50 mb
// }))

app.use(bodyParser.json({
    limit: '50mb'
})) // use json POST
app.use(bodyParser.urlencoded({
    limit:'50mb'
}))


app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();    
})



var messageToShow = ""

app.post('/', function(request, response){
    console.log('post from app')
    var name =  request.body.id
    // console.log('length = ' + request.get('Content-Length'))
    // console.log('type = ' +  request.get('Content-Type'))
    // console.log('method = '+ request.method)
    // console.log('url = ' +  request.url)
    // //console.log('name = ' + name)
    messageToShow =  name
    response.end('')
})

app.get('/wificam2', function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(messageToShow)
    response.end('')
    console.log('responded to weificam2')
})

app.get('/wificam', function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})
   response.write(messageToShow)
  // response.write('<br/>')
    //response.end('done writing')
   
    console.log('written the response')
})

var message = ""

var port = 1069
app.listen(port,'10.16.12.66', function(){
     console.log('listening at port = ' + port)
     if(message!=null && message!=""){
         console.log('receoved  video message = ' + message)
     }
})

console.log('Listening on port = ' + port)

