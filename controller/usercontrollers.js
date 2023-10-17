const {UserModel}=require('../Model/model.js');


//toregisteruser
exports.home=async(req,res)=>{
   res.send("hello World");
}

exports.registerUser=async(req,res)=>{
    const {name,email, password} = req.body;
    try {
     await UserModel.create({...req.body})  // creating a document in database
        res.status(200).send({ msg:"User Registered Successfully",});
  
    }catch(error){
        res.status(501).send({msg:error.message})
    }
}

//to login register

exports.LoginUser=async(req,res)=>{
    const{email,password}=req.body;
try{
    const UserData=await UserModel.findOne({email});
// checking password provided by user is correct or not
if(UserData.password == password){
    res.status(200).send({msg:"User Login Successfully, Enjoy!"})
}else if(UserData.password != password){
    res.status(401).send({msg:"You have Entered Wrong Password"})
}else{
res.status(404).send({msg:"Not find any account associated to this email"})

}
}catch(error){
   res.status(501).send({msg:"Not find any account associated to this email"})  
}

}