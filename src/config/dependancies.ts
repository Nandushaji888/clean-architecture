import {userRepository} from '../app/repository'
import {addUser_useCase} from '../useCases/user/addUser_useCase'

const useCase:any={
    addUser_useCase
}

const repository:any={
    userRepository
}

export default {useCase,repository}