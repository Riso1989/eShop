import Route from '@ember/routing/route';

export default class ContactRoute extends Route {

  async model() {
    return this.store.findAll('message');
  }
}
