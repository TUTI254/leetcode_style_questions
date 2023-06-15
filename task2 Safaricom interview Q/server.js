const db = require("./db");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// TODO set up resolvers and type definitions

const setupServer = async () => {
    //initialize db
    await db.initialize();

// create an instance of Apollo server
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        dataSources: () => ({
            db,
        }),
    });

    return server;
};

//set up the server
setupServer().then((server)=>{
    //start server and log URL
    server.listen().then(({url})=>{
        console.log(`Server is ready at url : ${url}`);
    })
})

module.exports = setupServer;
