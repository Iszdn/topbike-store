import jwt from 'jsonwebtoken'
import Users from "../models/user.js"


const secretKey = "hsdbdhkba"
//register
export const userRegister = async (req, res) => {

    try {
        const user = new Users({
            email: req.body.email,
            password: req.body.password
        })
        await user.save()
        res.status(200).json("user created!")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


//login

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email })
        if (!email) {
            res.status(500).res.json("user not found!")
        }
        if (!password) {
            res.status(500).res.json("user not found!")
        }
      
        if (!user) {
            res.status(500).res.json("user not found!")
        }
        if (user.password !== password) {
            res.status(404)
        }
        const token = jwt.sign({ email:email,role:user.role  }, secretKey, { expiresIn: '1h' });
        res.json(token)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// delete 

export const deleteUser=async (req,res)=>{
    try {
       const {id}=req.params
       const user=await Users.findByIdAndDelete(id)
       res.status(200).json("user deleted")
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

//getuser

export const getUser=async (req,res)=>{
    try {
      const users=await Users.find({})
      res.send(users)
       
    } catch (error) {
        res.status(500).json({ message: error })
    }
}