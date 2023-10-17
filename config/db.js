const mongoose=require('mongoose');

const connecttodb=async()=>{
    mongoose.connect(process.env.MONGO_URI).then((con)=>{
        console.log(`ConnectedToDB:${con.connection.host}`);
    }).catch((error)=>{
           console.log(error.message);
           process.exit(1);
    })
        
    }

    module.exports=connecttodb


