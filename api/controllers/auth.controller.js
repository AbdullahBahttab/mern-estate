import User from '../models/user.model.js';
import bcrtptjs from 'bcryptjs';
export const signup = async (req, res,next) =>
{
    const {username,email,password} = req.body;
    const hashedPassword = bcrtptjs.hashSync(password,10);
    const newUser =new User({username,email,password: hashedPassword});
    try
    {
      await newUser.save()
      res.status(201).json("user added");
    }
    catch(err){
      next(err);
    }
};
