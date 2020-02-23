import Route from '@ember/routing/route';

export default class CartRoute extends Route {

  async model() {
    return this.store.findAll('cart');
  }

  afterModel(model) {
    if (model.get('length') === 0) {
      this.transitionTo('emptyCart');
    }
  }
}
