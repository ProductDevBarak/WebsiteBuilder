import express from 'express'
import { Login,getUser } from '../controllers/auth.controllers.js'

const AuthRoute = express.Router()

AuthRoute.post('/login', Login)
AuthRoute.get('/get-user', getUser)

export default AuthRoute