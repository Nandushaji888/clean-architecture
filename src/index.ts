import express from 'express'
import {app} from './app'
import  connectDB  from './config/db' 



const start= ()=> {
    
        try {
            console.log('ghvsfdajhksfdagj');
            
             connectDB()
        } catch (error) {
            console.log(error);
            
        }
}

 app.listen(3002,()=> {
    console.log('server started');
    
 })

 start()