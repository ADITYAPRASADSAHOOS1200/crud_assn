const app=require('./app.js');

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`the port is running at http://localhost:${PORT}`);
})