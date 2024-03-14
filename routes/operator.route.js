import express from "express"
import { checkStudent, operatorLogin } from "../controllers/operator.controller.js"
import { verifyToken } from "../middlewares/authVerify.js"

const operatorRouter = express.Router()

//login
operatorRouter.post('/op/login', operatorLogin)
//checking students
operatorRouter.post('/op/check', verifyToken, checkStudent)

export default operatorRouter
