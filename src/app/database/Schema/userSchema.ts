import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String || null

})

const user = mongoose.model("user",userSchema)

export {
    user
}