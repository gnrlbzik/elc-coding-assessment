/**
 * This component handles display of search results.
 * 
 */
import React from 'react';

import SearchResultsItem from './search-results-item';

const SearchResultsList = (props) => {
  const {
    searchQuery = '',
    results = [],
  } = props;

  // render nothing: query string is zero length and no results available
  if (searchQuery.length === 0 && results.length === 0) {
    return null;
  }

  // show no results message: query string is 1+ char in length and no results
  if (results.length === 0) {
    return (
      <div className="no-search-results-container">
        <h1>No Matches Were Found!</h1>
      </div>
    )
  }

  // show results list: query string is 1+ chars in length and results are 1+ in length
  return (
    <ul className="search-results-container">
      {results.map((itemData, itemIndex) => {
        const uniqueKey = `"${itemData._id}-${itemData.name}"`
        return (<SearchResultsItem itemData={itemData} key={uniqueKey} />);
      })}
    </ul>
  );
}

export default SearchResultsList;
