/**
 * This component handles display of search results.
 * 
 */
import React from 'react';

import SearchResultsItem from './search-results-item';

const SearchResultsList = (props) => {
  const {
    results = [],
  } = props;
  if (results.length < 1) {
    return null;
  } 

  return (
    <ul>
      {results.map((itemData, itemIndex) => {
        const uniqueKey = `"${itemData._id}-${itemData.name}"`
        return (<SearchResultsItem itemData={itemData} key={uniqueKey} />);
      })}
    </ul>
  );
}

export default SearchResultsList;
