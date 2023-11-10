const { ChatOpenAI } = require("langchain/chat_models/openai");
const { BufferMemory } = require("langchain/memory");
const { ConversationChain } = require("langchain/chains");
const { ChatPromptTemplate, MessagesPlaceholder } = require("langchain/prompts");

const dotenv = require('dotenv')
dotenv.config()

const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_APIKEY,
    temperature: parseInt(process.env.GPT_TEMPERATURE),
    model: process.env.GPT_MODEL,
})

const memory = new BufferMemory({
    returnMessages: true, memoryKey: "history"
});

const chatPrompt = ChatPromptTemplate.fromMessages([
    [
        "system",
        "The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.",
    ],
    new MessagesPlaceholder("history"),
    ["human", "{input}"],
]);



const chain = new ConversationChain({ llm: model, prompt: chatPrompt, memory: memory });

module.exports = {chain, model}