const mongoose = require("mongoose")

const uri = process.env.URI;
console.log(uri)

mongoose.connect(uri)
    .then(() => console.log("Establised a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database"))