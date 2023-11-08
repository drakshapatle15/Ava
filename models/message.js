const mongoose = require('mongoose');
const uuid = require("uuid")

const MessageSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
        default: () => uuid.v1,
        unique: true
    },
    role: {
        required: false,
        type: String,
        default: null,
    },
    content: {
        required: false,
        type: String
    },
    isUser: {
        type: Boolean,
        required: false,
        default: null,
    }
}, { timestamps: true })

MessageSchema.pre('save', function (next) {
    if (this.isModified('role')) {
        this.isUser = this.role === 'user';
    }
    next();
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = {Message, MessageSchema}