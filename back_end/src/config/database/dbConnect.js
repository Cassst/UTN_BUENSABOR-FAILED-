const mongoose = require('mongoose');

const dbConnection = () =>  {
    try {
        const mongooDB = mongoose.connect(process.env.DB_URI);
        console.log("😃 Access to the database: CONNECTED ");
    } catch (error) {
        console.log("😒 Access to the database: DENIED. \n" + error);
    }
};


module.exports = dbConnection;