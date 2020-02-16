import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
    async model() {
        let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=java');
        let json = await response.json();

        return await json.items;
    }
}
