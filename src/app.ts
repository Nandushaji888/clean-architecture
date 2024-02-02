import express from "express";
import { routes } from "./routes";
import dependencies from "./config/dependancies";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())


app.use("/api", routes(dependencies));

app.listen(3000,()=> {
    console.log('server started');
    
 })
export {app}
