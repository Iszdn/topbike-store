import Workers from "../models/about.js";

// create 
export const createWorker=async (req,res)=>{
    try {
        const worker=new Workers({
            image:req.body.image,
 position:req.body.position,
 name:req.body.name,
 description:req.body.description
        })
        await worker.save()
        res.json("worker added")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get workers 
export const getWorker=async (req,res)=>{
    try {
        const workers=await Workers.find({})
        res.send(workers)
        }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}