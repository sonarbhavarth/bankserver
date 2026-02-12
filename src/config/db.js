const mongoose = require("mongoose")


function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(
            () => {
                console.log("connected to database")
            }
        )
        .catch(err => {
            console.log("error conntect to db")
            process.exit(1)
        }
        )
}
module.exports = connectToDB