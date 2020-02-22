import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {inject as service} from '@ember/service';


export default class MessageComponent extends Component {
  @service store;

  @tracked firstName;
  @tracked lastName;
  @tracked country;
  @tracked subject;

  @action 
  sendMessage() {
    let obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country,
      subject: this.subject
    }
    this.store.createRecord('message', obj);

    jQuery.ajax({
      url: "http://localhost:8081/messages",
      type: "POST",
      beforeSend: function (request) {
        request.setRequestHeader("Content-type", "application/json;charset=utf-8");
      },
      data: JSON.stringify(obj)
    });
  }
}
