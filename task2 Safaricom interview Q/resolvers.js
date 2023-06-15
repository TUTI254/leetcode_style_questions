// TODO implement the resolvers

const resolvers = {
    Query:{
        //resolver for the order query
        order: async(_,{id},{dataSources}) =>{
            //call getOrder method from data source
            return dataSources.db.getOrder(id);
        }
    },
    Mutation:{
        //resolver for updateStatus mutation
        updateStatus:async(_,{id,status}, { dataSources})=>{
            await dataSources.db.updateOrderStatus(id,status);
            return dataSources.db.getOrder(id);
        }
    },
    Order:{
        // resolver for items field of Order type
        items: async(order)=>{
            // split item string to array and map it to the expected format

            return order.items.split(",").map((itemId)=>({id:itemId ,name: ""}))
        }
    }
};

module.exports = resolvers;
