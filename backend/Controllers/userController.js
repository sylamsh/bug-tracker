import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Model/userModel.js'

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if(!existingUser) return res.status(404).json({ message : "User doesn\'t exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({ message : "Invalid password"})

        const token = jwt.sign({
            email: existingUser.email,
            role: existingUser.role,
            id: existingUser._id,
        }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.status(200).json({result: existingUser, token})

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })   
    }
}

export const signup = async (req, res) => {
    const { email, password, userName, role } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if(existingUser) res.status(401).json({ message: "User already exists"})
    
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({ email, password: hashedPassword, userName, role })
        const token = jwt.sign({
            email: result.email,
            role: result.role,
            id: result._id,
        }, process.env.SECRET_KEY, { expiresIn: "1h" })
        
        res.status(200).json({result: result, token})
    } catch (error) {
        res.status(500).json({ message: error})   
    }
}

export const fetchDevs = async (req, res) => {
    try {
        const devs = await User.find({ role: "developer" });
        res.status(200).json(devs)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}