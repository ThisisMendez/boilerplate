const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://User1:Football1@rest001-ah5fr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.get('/', (req,res) => {
  res.send('hello world')
}); 



app.listen(5000); 