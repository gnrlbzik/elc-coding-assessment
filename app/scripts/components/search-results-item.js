/**
 * This component handles display of search results item.
 * 
 */
import React from 'react';

const SearchResultsItem = (props) => {
  const { itemData = {} } = props;
  const {
    isActive,
    price,
    picture,
    name,
    about,
    tags,
  } = itemData;

  const isActiveSetToTrue = (isActive === 'true')

  return (
    <li className={`search-results-item ${!isActiveSetToTrue ? "unavailable" : ""}`}>
      {!isActiveSetToTrue ? (<b>Unavailable</b>) : null}
      {picture ? (<img src={picture} />) : null}
      {name ? (<h1>{name}</h1>) : null}
      {price ? (<h2>${price}</h2>) : null}
      {about ? (<p>{about}</p>) : null}
      {tags ? (<ul>{tags.map((tagValue, tagIndex) => <li key={tagIndex}>{tagValue}</li>)}</ul>) : null}
    </li>
  );
}

export default SearchResultsItem;
