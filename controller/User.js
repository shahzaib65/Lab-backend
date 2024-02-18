const User = require("../model/User");
const bcryptjs =require('bcryptjs');
const jwt = require("jsonwebtoken")

 const signup = async(req,res,next)=>{
const { name, staff_number, password } = req.body;
if(!name ||
    !staff_number ||
    !password ||
    name === '' ||
    staff_number === '' ||
    password === ''){
      next(errorHandler(400, 'All fields are required'));  

}
 const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    name,
    staff_number,
    password: hashedPassword,
  });

   try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }

};

const signIn = async(req,res,next)=>{
    const { staff_number, password } = req.body;

  if (!staff_number || !password || staff_number === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ staff_number });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }

}

module.exports = {
    signup,
    signIn
};