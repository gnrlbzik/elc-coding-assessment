const HOSTNAME    = 'localhost';
const PORT_LOCAL  = 3030;
const PORT_SERVER = 3035;

import data from '../../../../server/data'
import { filterDataItemsByString } from '../../../../utils'

export async function apiGetSearch(searchQuery) {
  // const headers = new Headers();
  //     // headers.append('Content-Type', 'application/json');
  //     // headers.append('Accept', 'application/json');
  //     // headers.append('Origin',`http://${HOSTNAME}:${PORT_LOCAL}`);
  // const encodedSearchQuery = `?queryToSearchBy=${encodeURIComponent(searchQuery)}`
  // const url = new URL(`http://${HOSTNAME}:${PORT_SERVER}/${encodedSearchQuery}`);
  // const options = {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: headers,
  // };

  // try {
  //   const response = await fetch(url, options);
  //   // const json = await response.json()
  // } catch (error) {
  //   console.log('ERROR', error)
  // }



  // return json || [];

  return filterDataItemsByString(searchQuery, data)  
}
