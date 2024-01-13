import mongoose from 'mongoose';
const { Schema } = mongoose;

const newsShema = new Schema({
    image:String,
  tittle:String, 
  desc:String,
  data:Number,
  month:String 
  
},{timestamps:true});

const News = mongoose.model('news', newsShema);
export default News