
const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('public'))

//express get function - using json
app.get('/',(request,response) => {
    response.json({
        name: 'Gil Ben David'
    })
})

//express get function - using send
app.get('/test',(request,response) => {
    response.send({
        name:'test'
    })
})


//express get function - using senFile
app.get('/home',(request,response) => {
    console.log(path.resolve(__dirname, 'home.html'))
    response.sendFile(path.resolve(__dirname, 'home.html'))
})


//express get function - using senFile
app.get('/about',(req,res) => {
    console.log(path.resolve(__dirname, 'about.html'))
    res.sendFile(path.resolve(__dirname, 'about.html'))
})


//express get function - using senFile
app.get('/contacts',(request,response) => {
    console.log(path.resolve(__dirname, 'contacts.html'))
    response.sendFile(path.resolve(__dirname, 'contacts.html'))
})

app.listen(3000,() => {
    console.log('App listening on port 3000')
})






// const http = require('http')
// const fs = require('fs')

// const homePage = fs.readFileSync('home.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactsPage = fs.readFileSync('contacts.html')

// const server = http.createServer((request,response) => {
// console.log(request.url);

// if (request.url === '/about') {
//     return response.end(aboutPage)
// }
// else if (request.url === '/contacts') {
//     return response.end(contactsPage)
// }
// else if (request.url === '/') {
//     return response.end(homePage)
// }
// else  {
//     response.writeHead(404);
//     response.end('file not found')
// }


// })

// server.listen(3000);