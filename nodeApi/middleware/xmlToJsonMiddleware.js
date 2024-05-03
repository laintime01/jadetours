const convertXmlToJson = require('../utils/xmlToJson');

const xmlToJsonMiddleware = async (req, res, next)=>{
  try{
    if(req.headers['content-type'] === 'application/xml'){
      const jsonData = await convertXmlToJson(req.body);
      req.body = jsonData;
    }
    next();
  }catch(err){
    console.error(err);
    res.status(500).json({message: 'Server error'});
  }
}

module.exports = xmlToJsonMiddleware;
