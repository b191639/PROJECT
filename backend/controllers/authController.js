import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt  from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const generateToken=user=>{
  
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'30d',
    });
}
//  console.log(require('crypto').randomBytes(48).toString('hex'))
export const register=async(req,res)=>{
   
    const {email,password,name,role,photo,gender}= req.body;
    try{
    let user=null;
    if(role === 'patient'){
        user = await User.findOne({email})
    }
    else if(role ==='doctor'){
        user=await Doctor.findOne({email})
    }
   //user already exits
    if(user){
        return res.status(400).json({message:'user already exists'})
    }
    //hash password
    const salt =await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)
    if(role ==="patient"){
        user=new User({
            name,
            email,
            password:hashPassword,
            photo,
            gender,
            role
        })
    }
    if(role==="doctor"){
        user=new Doctor({
            name,
            email,
            password:hashPassword,
            photo,
            gender,
            role
        })
    }
    await user.save()
    res.status(200).json({success:true,message:'user successfully created'})
    
    } catch(err){
        res.status(500).json({success:false,message:'Internal server error,Try again'})
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password); // Await the result of bcrypt.compare

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = generateToken(user);
        const { password: _, role, appointments, ...rest } = user._doc; // Destructure password and unused properties

        res.status(200).json({ status: true, message: 'Successfully logged in', token, data: { ...rest }, role });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ status: false, message: "Failed to login" });
    }
}
