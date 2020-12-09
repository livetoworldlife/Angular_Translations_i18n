const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const text ={
  'en' : "Hi My name is Ersin",
  'nl' : "Hou Ik ben Ersin"
};

app.get('/text', (req,res) => {
  const locale = req.header('Accept-Language').substr(0,2);
  res.send({text: text[locale]});
});

app.post('/like', (req,res) => {
  res.send({message: "thank_you"}); // same in en.json in frontend
});

app.listen(8000,console.log("server is running port 8000"));