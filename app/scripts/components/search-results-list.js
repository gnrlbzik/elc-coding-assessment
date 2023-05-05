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
      {results.map((itemData, itemIndex) => <SearchResultsItem index={itemIndex} itemData={itemData} />)}
    </ul>
  );
}

export default SearchResultsList;
