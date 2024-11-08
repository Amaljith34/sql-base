import express from 'express'
import 'dotenv/config'
import router from './routes/index.js'
import  cors from 'cors'
const app=express()
const PORT= process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get("/",(req,res)=>{
    return res.send('hii')
})

app.use(router)

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))