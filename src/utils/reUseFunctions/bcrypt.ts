import bcrypt from "bcrypt";

export const hashPassord = async(password:string)=> {
    let hashPass = await bcrypt.hash(password,10)
    console.log(hashPass);
    return hashPass
}

export const comparePassword = async(password:string,hashPass:string)=> {
    console.log(password,hashPass);
    let result = await bcrypt.compare(password,hashPass)
    return result
    
}