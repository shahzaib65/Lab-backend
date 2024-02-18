const Sections = require("../model/Sections")

const createSections = async(req,res,next)=>{
const { name } = req.body;
   if(!name ||
    name === '' ){
      next(errorHandler(400, ' field is required'));  
}
const newSections = new Sections({
    name
  });

   try {
    await newSections.save();
    res.json('Section added');
  } catch (error) {
    next(error);
  }

};
const getSections = async(req,res,next)=>{
     try {
    const user = await Sections.find();
    if (!user) {
      return next(errorHandler(404, 'Section not found'));
    }
   
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
 createSections,
 getSections
}