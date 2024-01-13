import mongoose from 'mongoose';
const { Schema } = mongoose;

const LogoShema = new Schema({
    image:String 
  
},{timestamps:true});

const LogoNav = mongoose.model('logoNav', LogoShema);
export default LogoNav