const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Livres = require('./livres');

mongoose.connect('mongodb://localhost:27017/livres');

const schema = buildSchema(`
    type Query {
      hello: String
    }
`);

const root = {
    hello: () => {
        return 'Hello World!';
    }
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(8089);
