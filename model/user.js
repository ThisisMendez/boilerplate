const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema({ 

  name: { 
    type: String  
    maxlength: 50
  }, 
  email: { 
    trype: String, 
    trim: true, 
    unique: 1 
  }, 
  password: { 
    type: String, 
    minlength: 5
  }, 
  lastName: { 
    type: Number, 
    maxlength: 50
  }, 
  role : { 
    type: Number
  }
  tokenExp : { 
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }