const mongoose = require('mongoose');
const uuid = require("uuid")

const { MessageSchema } = require("./message")

const MessageListSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
        default: () => uuid.v1,
        unique: true
    },
    personaID: {
        require: true,
        type: String,
        unique: true,
    },
    messages: [MessageSchema]
})


const MessageList = mongoose.model('MessageList', MessageList)

module.exports = { MessageList, MessageListSchema}
