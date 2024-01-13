import mongoose from 'mongoose';
const { Schema } = mongoose;

const LogoBlackShema = new Schema({
    image:String 
  
},{timestamps:true});

const LogoBlack = mongoose.model('logoBlack', LogoBlackShema);
export default LogoBlack