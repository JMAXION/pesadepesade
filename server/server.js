import express from 'express'
import cors from 'cors'
import productRouter from './router/productRouter.js'

const server = express()
const port = 8080;

server.use(express.json())
server.use(express.urlencoded())
server.use(cors())


server.use('/product',productRouter)


server.listen(port, ()=>{
  console.log("server start");
})