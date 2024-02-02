import {userData,userProfile} from '../../entities'

export const addUser_useCase=(dependencies:any)=> {
    console.log("ENTERING");
    
    const { repository:{userRepository}}=dependencies
    if(!userRepository) throw new Error('repo error')

    const executeFunction = async({name,email,password}:userData)=>{


        let data = {
            name,
            email,
            password
        }
        console.log(data,"USERDATA");
        
        const user:object=new userProfile(data)
        const userData = await userRepository.createUser(user)
        return {status:true,data:userData,message:"user"}
    }
    return {executeFunction}
}