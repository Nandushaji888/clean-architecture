// import dependancies from '../../config/dependancies'
import userAddConroller from './userAuthController'
export default (dependancies:any)=> {
    return{
        userAddConroller:userAddConroller(dependancies)
    }
}