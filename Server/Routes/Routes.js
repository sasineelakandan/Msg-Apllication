import Router from'express'
import { Singup } from '../Controller/Authcontroler.js'


const authRoutes=Router()

authRoutes.post('/signup',Singup)



export default authRoutes;