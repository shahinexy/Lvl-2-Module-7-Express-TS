"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
});
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //   success: false,
        //   message: "faild to get data"
        // })
    }
}));
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Data post success');
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong"
        });
    }
});
exports.default = app;
