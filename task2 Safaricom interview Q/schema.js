const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    order(id: ID!): Order
  }

  type Order {
    id: ID!
    total: Float!
    discountCode: String
    comment: String
    items: [Item!]!
    status: OrderStatus!
    deliveryAddress: String
  }

  type Item {
    id: ID!
    name: String!
  }

  enum OrderStatus {
    PENDING
    PAID
    IN_PROGRESS
    IN_DELIVERY
    DELIVERED
  }

  type Mutation {
    updateStatus(id: ID!, status: OrderStatus!): Order
  }
`;

module.exports = typeDefs;
