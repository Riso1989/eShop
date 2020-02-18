import Route from '@ember/routing/route';

export default class ContactRoute extends Route {

  async model() {

    let response = await fetch('http://localhost:8081/messages');
    let json = await response.json();
    return await json;
  }
}
