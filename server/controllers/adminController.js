const User = require('../models/userModel');
const Property = require('../models/propertyModel');

exports.getAllUsers = async (req, res) => {
  try {

    const users = await User.find().select('name email phoneNumber role');

    res.status(200).json(users); 

  } catch (error) {
    res.status(500).json({ 
        message: 'Error fetching users', 
        error: error.message 
    });
  }
};

exports.getAllProperties = async (req, res) => {
    try {
    
      const properties = await Property.find().select('name price description location furnished genderAllowed occupancyType');

      res.status(200).json(properties); 

    } catch (error) {
      res.status(500).json({ 
        message: 'Error fetching properties', 
        error: error.message 
    });
    }
  };

exports.getPropertyById = async (req, res) => {
    const { id } = req.params;
  
    try {

      const property = await Property.findById(id).select('-longitude -latitude -images');
  
      if (!property) {
        return res.status(404).json({ 
            message: 'Property not found' 
        });
      }
  
      res.status(200).json(property);
    } catch (error) {
      res.status(500).json({ 
        message: 'Error fetching property', 
        error: error.message 
    });
    }
  };
