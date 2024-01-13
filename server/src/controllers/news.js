import News from "../models/news.js";

// post product 
export const creatNews=async (req,res)=>{
    try {
        const { image, tittle, desc ,data,month} = req.body;
        const news=new News({
            image:image, 
            tittle:tittle, 
            desc:desc,
            data:data,
  month:month 
            
        })
        await news.save()
        res.json("product created")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }
    
// getAll Products 
export const getAllNews=async (req,res)=>{
try {
    const news= await News.find({})
    res.send(news)
} catch (error) {
    res.status(500).json({ message: error })
}
}
