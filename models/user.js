const mongoose = require('mongoose');
const uuid = require("uuid")
const {MessageListSchema} = require('./message-list.js')

const UserSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
        default: () => uuid.v4,
        unique: true
    },
    kind: {
        required: true,
        type: String,
        enum: ['sk', 'pk'],
        default: "sk",
    },
    name: {
        required: true,
        type: String
    },
    messagesList: MessageListSchema
}, { timestamps: true })

UserSchema.virtual('apikey').get(() => {
    return this.kind + this.userId.replace(/-/g, '');
});



const MessageList = mongoose.model('MessageList', MessageList)
const User = mongoose.model('User', UserSchema)


module.exports = { Message, MessageList, Persona, User }
