const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");


const app = express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=> {
	const url="mongodb+srv://janmeshtester24aug22:XEuuBMAOtfhqz2Yh@cluster0.w1cbrag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client=new MongoClient(url);
	const db = client.db("wn16april24");
	const coll = db.collection("student");
	const doc = { "name":req.body.name,"choice":req.body.choice};
	coll.insertOne(doc)
	.then(result=>res.send(result))
	.catch(error => res.send(error));



});

app.listen(9000,()=>{ console.log("ready @ 9000");});


