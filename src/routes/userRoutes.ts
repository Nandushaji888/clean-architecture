import express from "express";
import { profileController } from "../adapters";


export default (dependencies:any)=> {
    const router = express.Router()
    const {userAddConroller}= profileController(dependencies)
    router.post('/signup',userAddConroller)

    return router
}