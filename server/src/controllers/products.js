import Products from "../models/products.js";
import express from 'express'

// post product 
export const creatProduct=async (req,res)=>{
    try {
        const { image, tittle, price, category, color } = req.body;
        const product=new Products({
            image:image, 
            tittle:tittle, 
            price:price, 
            category:category,
            color:color
        })
        await product.save()
        res.json("product created")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }
    
// getAll Products 
export const getAllProducts=async (req,res)=>{
try {
    const products= await Products.find({})
    res.send(products)
} catch (error) {
    res.status(500).json({ message: error })
}
}

// delete product 
export const deleteProduct= async(req,res)=>{
    try {
        const {id}=req.params
        const product=await Products.findByIdAndDelete(id)
        res.json("product deleted")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// get by id 

export const getById=async(req,res)=>{
    try {
        const {id}=req.params
        const product=await Products.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error })
        
    }
}