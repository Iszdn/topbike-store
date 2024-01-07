import mongoose from 'mongoose';
const { Schema } = mongoose;

const productShema = new Schema({
    image:String,
  tittle:String, 
  price:Number, 
  category:String, 
  color:String
},{timestamps:true});

const Products = mongoose.model('Products', productShema);
export default Products