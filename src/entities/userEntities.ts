export interface userData {
    name : string;
    email : string;
    password : string | null;

    
}

export class userProfile{
    name:string
    email:string
    password:string | null

    constructor({name,email,password}:userData){
        this.name=name
        this.email=email
        this.password = password
    }
}