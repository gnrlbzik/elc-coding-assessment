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

  return (
    <div>
      {isActive ? (<b>Active Item</b>) : null}
      {picture ? (<img src={picture} />) : null}
      {name ? (<h1>{name}</h1>) : null}
      {price ? (<h2>${price}</h2>) : null}
      {about ? (<p>{about}</p>) : null}
      {tags ? (<ul>{tags.map((tagValue, tagIndex) => <li index={tagIndex}>{tagValue}</li>)}</ul>) : null}
    </div>
  );
}

export default SearchResultsItem;
