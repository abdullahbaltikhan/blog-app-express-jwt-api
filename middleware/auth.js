import Jwt from "jsonwebtoken";
const SECRET_KEY = "EXAMPLEAPI"; 

const auth = (req, res, next)=>{

try {

    let token = req.headers.authorization;
    // let token = req.headers["authorization"];
    if (token) {
        // console.log(token);
        token = token.split(" ")[1];
        let user = Jwt.verify(token, SECRET_KEY);        
        req.userId = user.id;
    }
    else{
        res.json({message:"un authorize"});
    }
    next()
    }catch (error) {
        console.log(error)
    }
}



export default auth;