const mongoose = require("mongoose");
require('dotenv').config({path:"variables.env"});

//connects to the mongoDB database in the variables.env file
mongoose.connect(`${process.env.DATABASE}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log('connected to DB');
});

mongoose.connection.on("error", (err)=>{
    console.log(`${err.message}`);
});