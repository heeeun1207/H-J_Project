const { Client } = require("pg");
const client = new Client({
  user: "jieun",
  host: "127.0.0.1",
  database: "postgres",
  password: "xxia1215",
  port: 5432,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});