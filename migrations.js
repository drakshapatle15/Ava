const dotenv = require('dotenv')
dotenv.config()

const { User, Message, MessageList, Persona } = require('./models.js')


testMessage = Message({
    role:"user",
    content:"Hey Ava. How have you been doing?",
})

testPersona = Persona({
    name: "Ava (Bold)",
    instruction: "You are Ava a bold AI Girlfriend",
})

testMessageList = MessageList({
    messages: [testMessage]
})

adminUser = User({
    _id: process.env.ADMIN_UUID,
    name: "admin",
    messageList: 
})