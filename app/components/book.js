import Component from "@glimmer/component";
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {isBlank} from '@ember/utils';


export default class BookComponent extends Component {

  @service converter;
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
  hasPrice(price) {
    return isBlank(price) ? true : false;
  }

  @action
  addToCart(id, ti, av, de, pr, cr) {
    let obj = {
      id: id,
      title: ti,
      avatar: av,
      desc: de,
      price: pr,
      currency: cr
    }
    this.addAmount(pr);
    let record = this.store.createRecord('cart', obj);
    record.save();
  }

  @action
  removeFromCart(id, pr) {
    this.removeAmount(pr);
    this.store.findRecord('cart', id).then(function (book) {
      book.destroyRecord().then(rec => rec.unloadRecord());
    });
  }

  addAmount(price) {
    let total = this.converter.getTotal();
    total = isBlank(total) ? 0 : total;
    price = isBlank(price) ? 0 : price;
    this.converter.setTotal(total + price);
  }

  async removeAmount(price) {
    let total = await this.converter.getTotal();
    total = isBlank(total) ? 0 : total;
    price = isBlank(price) ? 0 : price;
    this.converter.setTotal(total - price);
  }
}
