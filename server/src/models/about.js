import mongoose from 'mongoose';
const { Schema } = mongoose;

const workersShema = new Schema({
 image:String,
 position:String,
 name:String,
 description:String
},{timestamps:true});

const Workers = mongoose.model('workers', workersShema);
export default Workers