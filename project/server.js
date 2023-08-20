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
const searchTerms = ['You','Brooklyn Nine-Nine','Santa Clarita Diet','Black Mirror','The Good Girls','손 the geuest']

// 각 검색어에 대한 fetch 요청을 보내고 처리
searchTerms.forEach(searchTerm => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}`;


fetch(searchUrl)
  .then(response => response.json())
  .then(data => {
    if (data.results && data.results.length > 0) {
      const movie = data.results[0];

      const jsonData = JSON.stringify(movie, null, 2);
      fs.writeFile('movie_data.json', jsonData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('저장');
        }
      });
    } else {
      console.log('저장X');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
});


app.listen(port, ()=> {
  console.log(`${port}`);
})