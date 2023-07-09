const express = require('express');
const mysql = require('mysql');


const app = express();
const port = process.env.PORT || 3000;
const db = mysql.createConnection({
    host: '162.19.75.199',
    user: 'richard',
    password: 'richard',
    database: 'sntelecom'
  });

app.use(express.json());


app.post('/formsn',(req,res) => {
    const {repForm} = req.body;

    db.query("INSERT INTO formulaire (repForm) VALUES (?)", [repForm],(error,result) =>{
        if (error) throw error;
        return res.status(201).send({message: 'Formulaire correctement envoyé'})
    })
})

app.listen(port, () => {
    console.log('Server running on port' + port);
  });