const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const mysql = require('mysql2')
const { json } = require('stream/consumers')


app.use(cors())
const corsOptions = {
    origin: 'http://localhost:3000',
    
    allowHeaders:['Content-Type','Authorization'],
    
    
    

};

app.use(cors(corsOptions));
app.use(express.json())
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "Y1012Jqkhkp",
    connectionLimit:10
})

app.get('/deda', (req, res) => {
    const data = JSON 
    pool.query('SELECT *,DrAnswer,AlisonAnswer,VictorAnswer,Question FROM nextdatabase.dedaquestions', (err,results)=>{

        const data = JSON.stringify(results)
        console.log(res)
        res.send(data)
        
    })

    
}




)
app.get('/carl', (req, res) => {
    const data = JSON 
    pool.query('SELECT QuestionNum,CarlAnswer,DonutAnswer,KataAnswer,Question FROM nextdatabase.carlquestions order by QuestionNum;', (err,results)=>{

        const data = JSON.stringify(results)
        console.log(res)
        res.send(data)
        
    })

    
})
app.post('/deda', (req, res) => {
    const {  DrAnswer, AlisonAnswer, VictorAnswer } = req.body
    
    pool.query('INSERT INTO nextdatabase.dedaquestions (DrAnswer, AlisonAnswer, VictorAnswer) VALUES (?, ?, ?)    ', [ DrAnswer, AlisonAnswer, VictorAnswer], (err, results) => {
        if (err) {
            console.error(err)
            res.sendStatus(500)
            return
        }
        
        res.sendStatus(200)
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

