import mongoose from 'mongoose';
const { Schema } = mongoose;

const userShema = new Schema({
  email: {type:String,require:true,unique:true}, 
  password: {type:String,require:true},
  role:{type:String,default:"user"}
 
},{timestamps:true});

const Users = mongoose.model('users', userShema);
export default Users