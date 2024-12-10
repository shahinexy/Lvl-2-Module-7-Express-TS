// const express = require('express')
import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

//parser
app.use(express.json())
app.use(express.text())

// router 
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/vi/users', userRouter)
app.use('/api/vi/courses', courseRouter)


userRouter.get('/create-user', (req: Request, res: Response)=>{
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User Created Successfully",
    data: user
  })
})

courseRouter.post("/create-course", (req: Request, res: Response)=>{
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User Created Successfully",
    data: course
  })
} )

//Midlewear
const logger = (req: Request, res: Response, next: NextFunction) =>{
  console.log(req.url, req.method, req.hostname);
  next()
}

app.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello world vai')
})

app.post('/', logger, (req: Request, res: Response)=>{
console.log(req.body);
res.send('Data post success')
})

export default app;