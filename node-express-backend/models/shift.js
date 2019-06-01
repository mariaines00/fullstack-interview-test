const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// object structure in mongo
const ShiftSchema = new Schema({
    person: {type: String, required: true },
    start_date: { type: Date, required: true },
    duration: { type: Number, min:1, max:8, required: true }
})

// Export model
module.exports = mongoose.model('Shift', ShiftSchema);