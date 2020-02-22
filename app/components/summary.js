import Component from "@glimmer/component";
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import {tracked} from "@glimmer/tracking";
import {action} from '@ember/object';
import Route from '@ember/routing/route';


export default class SummaryComponent extends Component {

  @service converter;
  @service store;
  @service cart;
  @service router;

  @computed('converter.serviceTotal')
  get serviceTotal() {
    this.price = this.converter.getTotal();
    return this.price;
  }

  @tracked firstName;
  @tracked lastName;
  @tracked cardNumber;
  @tracked price;


  @action
  async sendOrder() {
    let obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      cardNumber: this.cardNumber,
      price: await this.price,
      bookIds: await this.converter.getIds()
    }
    console.log(obj);
    this.store.createRecord('order', obj);

    jQuery.ajax({
      url: "http://localhost:8081/orders",
      type: "POST",
      beforeSend: function (request) {
        request.setRequestHeader("Content-type", "application/json;charset=utf-8");
      },
      data: JSON.stringify(obj)
    });

    await this.deleteAllRecords();
    this.converter.setTotal(0);
    this.router.transitionTo('/books');
  }

  async deleteAllRecords() {
    await this.store.findAll('cart').then(function (cart) {
      cart.forEach(function (rec) {
        rec.destroyRecord().then(r => r.unloadRecord());
      });
    });
  }
}
