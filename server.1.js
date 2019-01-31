/**
 * @author rainci(刘雨熙)
 * about node server
 */
const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
    console.log('request come in: ', request.url)
    if (request.url === '/') {
        const html = fs.readFileSync('index.html', 'utf8')
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'max-age=60',
        })
        response.end(html)
    }

    if (request.url === '/index.js') {
        const js = fs.readFileSync('index.js')
        const etag = request.headers['if-none-match']
        if (etag === '777') {
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=60, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('') // 这里不传任何内容，即使有内容，浏览器也不会读取
        }else{
            response.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=60, no-cache', // 通过 no-cache，即使没过期浏览器也要向服务器验证，不会从缓存读取。
                'Last-Modified': '123', // 随便设的值
                'Etag': '777'
              })
              response.end(js)  
        }
    }
    if(request.url === '/getData.json') {
        const data = {'name' : 'lyx', 'gender' : 'female' }
        response.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8',
            'Cache-Control': 'max-age=60',
        })
        response.end(data)     
    }

}).listen(8888)
console.log('server listening on 8888')