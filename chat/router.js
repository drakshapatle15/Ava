const express = require('express');
const router = express.Router();

const {chain, model} = require("./llmchain")


router.post("/chat", async (req, res)=>{
    console.log(req.body)
    const chatResponse = await model.predict(req.body.input)
    res.send(chatResponse)
})

// router.post("/init-persona", async (req, res)=>{
//     const personas = await fetch("https://apiava.websperotech.com/persona")
//     const data = personas.json()

// })



module.exports = router