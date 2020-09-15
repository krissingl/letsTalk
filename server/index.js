/* eslint-disable no-restricted-syntax */
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');
// const nodeCouch = require('node-couch');
// const db = require('../database/index.js');
const db = require('../database/index.js');

const app = express();
const port = 3012;

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.use('bundle.js', expressStaticGzip(`${__dirname}../client/dist`, {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.get('/thoughts', (req, res) => {
  const thots = [];
  db.list({ include_docs: true }).then((body) => {
    body.rows.forEach((doc) => {
      console.log(doc);
      thots.push(doc);
    });
  })
    .then(() => {
      console.log(thots);
      res.status(200).send(thots);
    })
    .catch(() => {
      console.log('Theres an error');
    });
});
app.post('/thoughts', (req, res) => {
  const { thought } = req.body;
  db.insert({ _id: new Date(), thought }).then((body) => {
    console.log(body);
    res.status(200);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// const document = {
//   id: new Date(),
//   view: 'key',
//   thought,
// };
// couchDb.Document.create(document, (error, response) => {
//   if (error) {
//     res.status(400).send(error);
//   } else {
//     res.status(200).send(response);
//   }
// });
