const Leaves = require("../model/Leaves")

const createLeave = async(req,res,next)=>{
const { leave } = req.body;
   if(!leave ||
    leave === '' ){
      next(errorHandler(400, 'All fields are required'));  
}
const newLeave = new Leaves({
    leave
  });

   try {
    await newLeave.save();
    res.json('Leave added');
  } catch (error) {
    next(error);
  }

};
const getLeaves = async(req,res,next)=>{
     try {
    const user = await Leaves.find();
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
   
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
 createLeave,
 getLeaves
}