import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:8081/';
  headers = {
    'Content-type': 'application/json;charset=utf-8'
  }

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
