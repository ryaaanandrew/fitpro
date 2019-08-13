const express = require('express');
const graphQLHTTP = require('express-graphql');
const graphQLSchema = require('./graphql/schema');
const graphQLResolvers = require('./graphql/resolvers');

const app = express();
const PORT = 4000;

app.use('/graphql', graphQLHTTP({
    graphiql: true,
    schema: graphQLSchema,
    rootValue: graphQLResolvers
}));

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));