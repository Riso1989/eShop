import Route from '@ember/routing/route';

export default class BookNameRoute extends Route {

  async model(params) {
    let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + params.book_name);
    let json = await response.json();
    return await json.items;
  }
}
