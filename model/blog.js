import mongoose from "mongoose";
import user from "./user";

var Schema = mongoose.Schema;

var blogSchema = new Schema({
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        userId:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            require:true            
        }

}, {timestamps:true} );
// Compile model from schema
const blog = mongoose.model('blog', blogSchema );

export default blog