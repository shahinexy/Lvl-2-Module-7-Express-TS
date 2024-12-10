"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// router 
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/vi/users', userRouter);
app.use('/api/vi/courses', courseRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User Created Successfully",
        data: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User Created Successfully",
        data: course
    });
});
//Midlewear
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello world vai');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Data post success');
});
exports.default = app;
