const mongoose = require('mongoose');
if (process.env.NODE_ENV != "production") {
    require("dotenv").config(); // not load in deploy
  }

async function connect(){
    try {
            await mongoose.connect(process.env.DB_URL)
            console.log('Connect');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connect