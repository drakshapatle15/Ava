const chatGPT = require('axios.conf.js')
const personaPath = "./media/personas.json"
const system_promt = "You are Ava a girlfriend"

const getChatCompletion = async (messages) => {
	return await chatGPT.post("/completions", {
		"model": process.env.GPT_MODEL,
		"messages": messages,
		"temperature": 1
	})
}

const getPersona = (personaID, personaName)=>{
	const data = fs.readFileSync(personaPath, 'utf8');
    const allPersonas = JSON.parse(data);
	const persona = allPersonas.find((persona)=>persona._id==personaID && persona.name==personaName)
	return persona
}



