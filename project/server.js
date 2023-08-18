const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req,res) => {
  fs.readFile('data.json', 'utf8',(err,data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const series = JSON.parse(data).Series;
    res.json(series);
  });
});



const apiKey = '4f7a2baa745822c7e805100300f62cc6';
//todo 공식문서 찾아보기
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

fetch(apiUrl) 
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //todo 포스터 , 비디오 , 장르 , 감독 , 배우 , 설명 , 날짜 
    

    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




app.listen(port, ()=> {
  console.log(`${port}`);
})