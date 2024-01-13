import LogoNav from "../models/logonav.js";

// post product 
export const creatLogoNav=async (req,res)=>{
    try {
        const { image } = req.body;
        const logo=new LogoNav({
            image:image, 
            
        })
        await logo.save()
        res.json("logo created")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }
    
// getAll Products 
export const getAllLogoNav=async (req,res)=>{
try {
    const logonav= await LogoNav.find({})
    res.send(logonav)
} catch (error) {
    res.status(500).json({ message: error })
}
}