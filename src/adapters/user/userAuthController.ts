import {Request,Response} from 'express'
import {hashPassord} from '../../utils/reUseFunctions/bcrypt'

export default(depedencies:any)=> {
    console.log("Entt");
    
    const {useCase:{addUser_useCase}} = depedencies;
    // const {repository:{userRepository:{getUserByEmail}}} = depedencies
    const addUser = async(req:Request,res:Response)=> {
        console.log("req.body");
        console.log(req.body);
        const {name,email,password} = req.body;
        
        try {
            // let userExist = await getUserByEmail(email)
            // if(!userExist){
                let securedPass = hashPassord(password)
                const user= await addUser_useCase(depedencies).executeFunction({name,email,passord:securedPass})
                if(!user){
                    throw new Error('No user')
                }
                console.log('user',user);
                res.status(200).json(user)
                

            // }else{
            //     res.status(200).json('user already exists')
            // }
        } catch (error:any) {
            console.log("from add user");
            
        }
    }
    return addUser

}