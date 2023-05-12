const HOSTNAME     = 'localhost';
const PORT_SERVER  = 3035;
import axios from 'axios'

import { filterDataItemsByString } from '../../../../utils';

export async function apiGetSearch(searchQuery) {
  const encodedSearchQuery = `search?queryToSearchBy=${encodeURIComponent(searchQuery)}`
  const response = await axios.get(`http://${HOSTNAME}:${PORT_SERVER}/${encodedSearchQuery}`)

  return response.data || [];
}
