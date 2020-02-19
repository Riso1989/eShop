import Component from "@glimmer/component";
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";


export default class BookComponent extends Component {

  @service('shopping-cart') cart;
  @service store;
  @tracked isCart = this.checkCart();

  @action
  checkCart() {
    if (window.location.href.includes("cart")) {
      return true;
    }
    return false;
  }

  @action
  addToCart(id, ti, av, de) {
    let obj = {
      id: id,
      title: ti,
      avatar: av,
      desc: de
    }
    let record = this.store.createRecord('cart', obj);
    record.save();
  }

  @action
  removeFromCart(id) {
    let post = this.store.peekRecord('cart', id);
    post.deleteRecord();
    post.isDeleted;
    post.save();
  }

}
