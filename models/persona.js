const mongoose = require('mongoose');
const uuid = require("uuid")

const PersonaSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
        default: () => uuid.v1,
        unique: true
    },
    name: {
        required: true,
        type: String,
        unique: true
    },
    instruction: {
        required: true,
        type: String,
    },
}, { timestamps: true })

const Persona = mongoose.model('User', PersonaSchema)

module.exports = {Persona, PersonaSchema}