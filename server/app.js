const express = require('express');
const mongoose = require('mongoose');
const graphQLHTTP = require('express-graphql');
const graphQLSchema = require('./graphql/schema');
const graphQLResolvers = require('./graphql/resolvers');
const isAuth = require('./middleware/isAuth');

const app = express();
const PORT = 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(isAuth);

app.use('/graphql', graphQLHTTP({
    graphiql: true,
    schema: graphQLSchema,
    rootValue: graphQLResolvers
}));

app.use('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-8nozd.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true })
    .then(app.listen(PORT, () => console.log(`Now listening on port ${PORT} and connected to MongoDB`)))
    .catch(err => console.log(err));

