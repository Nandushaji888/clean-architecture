import schemas from "../database/Schema";
import mongoose from "mongoose";

const { user } = schemas;

export default {
  createUser: async (data: any) => {
    console.log("create user");
    
    const userData ={
        name:data.name,
        email: data.email,
        password : data.password
    }
    console.log(userData);
    const User = await user.create(userData)

    console.log(User,"repooo");
    
    return User
    
  },

  getUserByEmail:async(email:any)=> {
    let User = await user.findOne({email:email})
    return User
  }

};
