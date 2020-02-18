import Route from '@ember/routing/route';

export default class BookNameRoute extends Route {

  async model(params) {
    console.log(params);
    let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + params.book_name);

    console.log(response);
    let json = await response.json();
    return await json.items;
  }
}
