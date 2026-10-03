console.log("Hello Javascript");
document.getElementById("test").style.color="blue"
const http = required('http')

const PORT = 3000;
const server = http.createServer((req,res)=>(
    res.end("We are learning backend")
))

server.listen(PORT, ()=>{
    console.log('Port is successfully running on port ${PORT}')
})
    
// document.getElementById("someid").innerText="I am some Div"