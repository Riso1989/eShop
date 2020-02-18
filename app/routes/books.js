import Route from '@ember/routing/route';

export default class BooksRoute extends Route {

    async model() {
        console.log();
        let response = await fetch('https://www.googleapis.com/books/v1/volumes?q=java');

        console.log(response);
        let json = await response.json();
        return await json.items;
    }
}
