/**
 * This Component represents a single link.
 */
 import React from 'react';
 import PropTypes from 'prop-types';


 export default function Link(props){
   return (
    <div>
      <div>
        { props.link.description } ( 
          {props.link.url} - {' '}
          { props.link.hash }
        )
      </div>
    </div>
   );
 }

 Link.propTypes = {
     link: PropTypes.shape({
         id: PropTypes.string,
         url: PropTypes.string,
         hash: PropTypes.string,
         description: PropTypes.string,
     }),
 };