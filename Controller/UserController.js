import prisma from "../DB/db.config.js";

export const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    console.log(req.body)
    const findUser=await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(findUser){
        return res.status(400).json({sucess:false,message:"email alredy exist"})
    }
    const newUser=await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return res.status(200).json({sucess:true,message:"usercreated",data:newUser})
}

//update the user

export const updateuser=async(req,res)=>{
    const userId=req.params.id
    const {name,email,password}=req.body


    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
          name,
          email,
          password
        }
    })
}