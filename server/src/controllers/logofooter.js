import LogoBlack from "../models/logofooter.js";

// post product 
export const creatLogoBlack=async (req,res)=>{
    try {
        const { image } = req.body;
        const logo=new LogoBlack({
            image:image, 
            
        })
        await logo.save()
        res.json("logo created")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    }
    
// getAll Products 
export const getAllLogoBlack=async (req,res)=>{
try {
    const logonav= await LogoBlack.find({})
    res.send(logonav)
} catch (error) {
    res.status(500).json({ message: error })
}
}