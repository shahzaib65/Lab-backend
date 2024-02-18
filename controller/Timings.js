const Timing = require("../model/Timing")

const createTiming = async(req,res,next)=>{
const { shift,start,end } = req.body;
   if(!shift ||
     !start ||
      !end ||
    shift === '' || start === '' || end === ''){
      next(errorHandler(400, 'All fields are required'));  
}
const newTiming = new Timing({
    shift,start,end
  });

   try {
    await newTiming.save();
    res.json('Timing added');
  } catch (error) {
    next(error);
  }

};
const getTimings = async(req,res,next)=>{
     try {
    const user = await Timing.find();
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
   
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
 createTiming,
 getTimings
}