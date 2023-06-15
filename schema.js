const { gql } = require("apollo-server");

// TODO write correct schema

const typeDefs = gql`
    enum OrderStatus {
    PENDING
    PAID
    IN_PROGRESS
    IN_DELIVERY
    DELIVERED
    }
    type Items {
    id: ID!
    name: String!
    }

    type Query {
        order: Order
    }

    type Order {
        id: ID!
        deliveryAddress: String!
        items: [Items!]!
        total: Float!
        discountCode: String
        comment: String
        status: OrderStatus!
    }
`;

module.exports = typeDefs;
