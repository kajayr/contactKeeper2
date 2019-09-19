const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(res, req){
    req.json({ msg :'Welcome to the Back End Server Side API'});
})

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, ()=> console.log(`Server running now on port ${PORT}`) );