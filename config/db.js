const mongoose = require('mongoose');


const connect = async(URL)=>{
    try {
        await mongoose.connect(URL);
        console.log('Database connected.');     
    } catch (error) {
        console.log('Unable to connect:',error);
    }
};

module.exports = connect;