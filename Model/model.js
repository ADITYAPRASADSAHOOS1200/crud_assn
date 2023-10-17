const mongoose=require('mongoose');

const  userschema = new mongoose.Schema({ 
    name:{type:String,
        maxLength:[20,"name is less than 20"],
        required:true},
    email:{type:String,
        unique:true,
        required:true},
    password:{type:String,
        unique:true,
        maxLength:[10,"less than equal to 10 digit"],
        required:true}

});

const UserModel=module.exports=mongoose.model("User",userschema);

module.exports={UserModel}