/* eslint linebreak-style: ["error", "windows"] */

import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async getList() {
    const response = await fetch(API_ENDPOINT.GET_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestourant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DataSource;
