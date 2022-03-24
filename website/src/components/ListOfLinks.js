import React from 'react';
import Link from './Link';
import { gql } from '@apollo/client'
import { graphql } from 'graphql';

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      url
      description
      hash
    }
  }
`;

export default function ListOfLinks(props){
  return (
      <div>
        Wueh!
        {/**
          props.allLinksQuery && props.allLinksQuery.loading  ? <div>Loading...</div> :
          props.allLinksQuery && props.allLinksQuery.error    ? <div>Error occured</div> :
          props.allLinksQuery.allLinks.length === 0           ? <div>Woops! No links...</div> :
          <div>
            {
              props.allLinksQuery.allLinks.map(link => <Link key={link.id} link={link}/>)
            }
          </div>*/
        }
      </div>
  );
}

graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery'})(ListOfLinks).then((result) => {
  console.log("bruh")
});