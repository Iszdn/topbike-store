import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routers/user.js'
import Productrouter from './src/routers/products.js'
import WorkerRouter from './src/routers/about.js'
import NewsRouter from './src/routers/news.js'
import LogoBlackRouter from './src/routers/logofooter.js'
import LogoNavRouter from './src/routers/logonav.js'
const app = express()

app.use(express.json())
dotenv.config()
app.use(cors())

app.use("/user",router)
app.use("/products",Productrouter)
app.use("/workers",WorkerRouter)
app.use("/news",NewsRouter)
app.use("/logoblack",LogoBlackRouter)
app.use("/logonav",LogoNavRouter)

const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT

mongoose.connect(url).then(()=>console.log("connected")).catch((error)=>console.log(error))
app.listen(PORT, () => {
  console.log(`Example app listening on port `)
})