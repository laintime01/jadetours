const xml2js = require('xml2js');

const convertXmlToJson = async (xmlData) => {
  try {
    const parser = new xml2js.Parser({ explicitArray: false });
    const jsonData = await parser.parseStringPromise(xmlData);
    return jsonData;
  } catch (error) {
    console.error('Error converting XML to JSON:', error);
    throw error;
  }
};

module.exports = { convertXmlToJson };
