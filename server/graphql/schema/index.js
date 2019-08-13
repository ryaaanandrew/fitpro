const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }
    input UserInput {
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }
    type RootQuery {
        users: [User!]!
    }
    type RootMutation {
        createUser(userInput: UserInput): User
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);