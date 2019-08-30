//* WEB
const express = require('express');
const cors = require('cors');
//* MongoDB
const mongoose = require('mongoose');
//* GraphQL
const { graphqlPath, graphql } = require('./graphql/gqlMaster');

//! Deploy 할 때 주석 제거
// const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(graphqlPath, graphql);

//! Deploy 할 때 주석 제거
// app.use(express.static('./../public'));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
// });

////------------------------------

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ujd6u.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
  )
  .then(() => {
    app.listen(PORT, () => console.log(
        `\nServer started on port ${PORT} \n\nGraphQL Schema Test\n: http://localhost:5000/graphql`,
      ),);
  })
  .catch((err) => {
    console.log(err);
  });
