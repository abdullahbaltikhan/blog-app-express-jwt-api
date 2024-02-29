import user from "../model/user";
import bcrypt from "bcrypt";
import Jwt, { verify }  from "jsonwebtoken";

import { trusted } from "mongoose";

// const SECRET_KEY = "EXAMPLEAPI"; 

class userController{

    static signup = async(req, res, next) => {
        // const user = req.body;
        const {username, email, password} = req.body;

        try {
          // checking existing user
          // password hash
          // user create
          // token genarate

          // checking existing user
          const exisitingUser = await user.findOne({email:email});
          if(exisitingUser){
            return res.status(400).json({message:"user alerday existe"});
          }

          // password hash
          const passwordBcrypt = await bcrypt.hash(password, 10);

          // user create
          const createdUser = await user.create({
            username:username,
            email:email,
            password:passwordBcrypt
          }) 

          // token genarate
          const token = Jwt.sign({email:createdUser.email, id:createdUser._id}, process.env.SECRET_KEY);

          res.json({ user:createdUser, token:token });

        } catch (error) {
          console.log(error)
        }

      }
    static signin = async (req, res, next)=>{

      const {email, password} = req.body;

      try {
        // chick exsitingn user
        const existeUser = await user.findOne({email:email});
        if (!existeUser) {
            res.status(404).json({mesage:"User Not found"});
        }
        // password chick
        const bcryppassword = await bcrypt.compare(password, existeUser.password)
        if(!bcryppassword){
          res.status(400).json({mesage:"Password Not Match"});
        }
        // chick token verify
        const token = Jwt.sign({email:existeUser.email, id:existeUser._id}, process.env.SECRET_KEY);
        res.status(201).json({User:existeUser, token: token});

      } catch (error) {
        console.log(error)
      }

    }

}

export default userController