const express = require("express")
const app = express()
const path = require("path")
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const port = 3000
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
const db ={}
io.on("connection",(socket)=>{

     console.log("connected user",socket.id)
    socket.on("name",(name)=>{

   db[socket.id]=name

    socket.on("input",(data)=>{
        console.log(data)
        console.log(db)
        const message={
            name: name,
            message: data
        }
        
        
        io.emit("message",message)

        
    })
  }) 

})
app.get("/",(req,res)=>{

    res.render("chat")
})

http.listen(port, () =>{

    console.log(port)
})








