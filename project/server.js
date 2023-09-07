const express = require('express');
const fs = require('fs');
const { url } = require('inspector');
const jsonFilePath = 'data.json';


const app = express();
const port = 3002;

app.use(express.json());
const WatchlistName = [];
//data.json파일읽기
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const Watchlists = jsonData.Watchlist;
//watchlistName의 새로운 배열 만들기
    Watchlists.forEach( name => {WatchlistName.push(name.name)});
    console.log(WatchlistName); 
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }



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
const BASE_LANG = 'ko';
const BASE_REGION = 'KR';
const searchRequests  = WatchlistName.map(term => {
  const searchTermString = encodeURIComponent(term);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${BASE_LANG}&region=${BASE_REGION}&query=${searchTermString}`;

  
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      return null;
    });
  });
// 모든 검색 결과를 기다린 후에 처리
Promise.all(searchRequests)
  .then(results => {
    results.forEach(result => {
      console.log(result);
    });
  })
  .catch(error => {
    console.error(`Error fetching data for one or more search terms: ${error}`);
  });

});

app.listen(port, ()=> {
  console.log(`${port}`);
})