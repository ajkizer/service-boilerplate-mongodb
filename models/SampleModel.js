const mongoose = require("mongoose");


const SampleSchema = new mongoose.Schema({
    data: {
        type: String,
        required: [true, "Please add data"],
    }
})


module.exports = mongoose.model("Sample", SampleSchema)