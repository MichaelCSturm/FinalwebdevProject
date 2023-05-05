import axios from 'axios';

var questions = {

}
var drAnswer = {}
var AlisonAnswer = {}
var VictorAnswer = {}

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "Y1012Jqkhkp",
    connectionLimit:10
})
pool.query('SELECT QuestionNum,DrAnswer,AlisonAnswer,VictorAnswer,Question FROM nextdatabase.dedaquestions order by QuestionNum;', (err,res)=>{
    return questions = questions+res
})
const instance = axios.create({
    
    
});export default instance;