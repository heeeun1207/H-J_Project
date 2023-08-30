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
const searchTerm = "너의 모든 것";

  const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}`;
  
  return fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        console.log(movie);
        return movie;
      } else {
        return null;
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return null;
    });



app.listen(port, ()=> {
  console.log(`${port}`);
})