import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import OfferTile from "./OfferTile.js";
import { gql } from "@apollo/client";

// Grapql query to fetch offers with limit and some sort arguments
const GET_OFFERS = gql`
  query GetOffers($limit: Int, $sort: Sort) {
    offers(limit: $limit, sort: $sort) {
      id
      name
      imageUrl
      description
      value
      currency
      visitedCount
    }
  }
`;

// Grapql Mutation to mark an offer as visited

const MARK_VISITED = gql`
  mutation MarkVisited($offerId: String!) {
    markVisited(offerId: $offerId) {
      id
      visitedCount
    }
  }
`;

export default function OfferListing() {
  // Use useQuery hook to fetch data from Api
  const { loading, error, data } = useQuery(GET_OFFERS, {
    variables: {
      limit: 10,
      sort: {
        by: "DATE_ADDED",
        order: "DESC",
      },
    },
  });

  //use useMutation to handle markVisited mutation
  const [markVisited] = useMutation(MARK_VISITED);

  // create click handler for marking an offer as visited
  const clickHandler = (offerId) => {
    markVisited({ variables: { offerId } })
      .then((response) => {
        const updatedOffer = response.data.markVisited;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // check loading state for api
  if (loading) {
    return <div>Loading offers...</div>;
  }
  // check error state for api if they

  if (error) {
    return <div>Failed to load offers!</div>;
  }

  //render the list of Offers

  return (
    <div>
      {data.offers.map((offer) => (
        <OfferTile
          key={offer.id}
          name={offer.name}
          visitedCount={offer.visitedCount}
          price={`${offer.value} ${offer.currency}`} // Concatenate value and currency
          imageUrl={offer.imageUrl}
          description={offer.description || ""} // Use empty string if description is undefined
          clickHandler={() => clickHandler(offer.id)}
        />
      ))}
    </div>
  );
}

//test cases
/*
Compilation successful.

Solution should show "Loading offers" while loading offers
Output (stderr):
AssertionError: expected 'Loading offers...' to equal 'Loading offers'
   
WRONG ANSWER

Solution should show "Failed to load offers" on loading error
Output (stderr):

WRONG ANSWER

Solution should display 10 offers
OK

Solution should display 10 latest offers in descending order (by dateAdded)
OK

Solution should concatenate value and currency
OK

Solution should pass an empty string when description undefined
OK

Solution should display all offers with correct data
OK

Solution should send mutation on clickHandler call
OK

Solution should update visitedCount after receiving mutation response
OK

Solution shouldn't overfetch query
OK

Solution shouldn't overfetch mutation
OK
*/
