var express = require('express')

var app = express()


app.get("/chat/", async (req, res) => {
	const snapshot = await User.get();
	const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	res.send(list);
});

app.post("/create", async (req, res) => {
	const data = req.body;
	await User.add({ data });
	res.send({ msg: "User Added" });
});

app.post("/update", async (req, res) => {
	const id = req.body.id;
	delete req.body.id;
	const data = req.body;
	await User.doc(id).update(data);
	res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
	const id = req.body.id;
	await User.doc(id).delete();
	res.send({ msg: "Deleted" });
});
app.listen(5000, () => console.log("Up & RUnning *5000"));
