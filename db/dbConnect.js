const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    mongoose
        .connect(
            "mongodb+srv://Odie1:Odie2020Max@test1.r7nfrah.mongodb.net/authDB?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
            }
        )

        .then(() => {
            console.log("Successfully connect to mongoDB Atlas");
        })
        .catch((error) => {
            console.log("Unable to connect to mongoDB Atlas");
            console.error(error);
        })
        

}

module.exports = dbConnect