import User from '../models/User.js';
import { hashPassword, comparePassword } from '../helpers/auth.js';
import jwt from 'jsonwebtoken';


// signup function takes name,email,password from request and perform the operations 
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return res.json({ error: "Name required" });
        if (!password || password.length < 6) return res.json({ error: "Password is required and should be at least 6 characters" });

        const exists = await User.findOne({ email }); // if email not found returns the json message
        if (exists) return res.json({ error: "Email taken already" });

        const hashedPassword = await hashPassword(password); // the password is hashed
        const user = await User.create({ name, email, password: hashedPassword }); // create a user in mongodb

        return res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred during signup" });
    }
};

//  signin function takes email,password from request and perform the operations 
export const signin = async (req, res) => { 
    try{
        const {email,password} = req.body
        const user = await User.findOne({email})

        if(!user)
        {
            return res.json({
                error:"No user found"
            })
        }
        const match = await comparePassword(password,user.password)

        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '30d' }, (err, token) => {
                if (err) throw err;
                res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 }).json(user);
            });
        }

        if(!match)
        {
            res.json({
                error:"Not matched"
            })
        }
        res.json({message: "successfully signed in"})
    }catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred during signin" });
    }
};

export const logout = (req, res) => {
    res.clearCookie('token');
    return res.json({ message: "Successfully logged out" });
};
