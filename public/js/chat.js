console.log("hi")
window.addEventListener('load',  ()=>{
    const socket = io()
    
    
    const form = document.getElementById("form")
    const input=document.getElementById("input")
    const message= document.getElementById("messages")
    let name =prompt("ماهو اسمك؟") 
    
   socket.emit("name",name)
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        
        let $input= input.value;
        input.value="";

        socket.emit("input",$input);
        


        
    })
    socket.on("message",(data)=>{
            console.log(data.name)
            message.innerHTML += ` <div>${data.name} :${data.message} </div>`
            
        })
    


})