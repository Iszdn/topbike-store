import mongoose from 'mongoose';
const { Schema } = mongoose;

const userShema = new Schema({
  email: {type:String,unique:true}, 
  password: String,
  role:{type:String,default:"user"}
 
},{timestamps:true});

const Users = mongoose.model('users', userShema);
export default Users