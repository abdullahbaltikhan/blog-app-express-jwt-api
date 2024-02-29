import mongoose from "mongoose";

var Schema = mongoose.Schema;

var userSchema = new Schema({
        username:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }

}, {timestamps:true} );
// Compile model from schema
const user = mongoose.model('user', userSchema );

export default user