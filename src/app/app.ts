// const express = require('express')
import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

//parser
app.use(express.json())
app.use(express.text())

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