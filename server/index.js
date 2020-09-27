/* eslint-disable no-restricted-syntax */
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('nano')('http://admin:Lady231!@localhost:5984/lets_talk_thoughts');

const app = express();
const port = 3012;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/thoughts', (req, res) => {
  const thots = [];
  db.list({ include_docs: true }).then((body) => {
    body.rows.forEach((doc) => {
      thots.push(doc);
    });
  })
    .then(() => {
      res.status(200).send(thots);
    })
    .catch(() => {
      console.log('Theres an error');
    });
});
app.post('/thoughts', (req, res) => {
  const { thought } = req.body;
  const { timestamp } = req.body;
  // const timestamp = new Date();
  // console.log(timestamp);
  db.insert({ _id: timestamp, thought }).then((body) => {
    console.log(body);
    res.status(200);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
