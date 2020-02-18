import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class MessageComponent extends Component {
@tracked firstName;
@tracked lastName;
@tracked country;
@tracked subject;

@action sendMessage() {
    jQuery.ajax({
        url: "http://localhost:8081/messages",
        type: "POST",
        beforeSend: function(request) {
            request.setRequestHeader("Content-type", "application/json;charset=utf-8");
          },
        data: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          subject: this.subject
        })
      }).then(function(resp){
        this.transitionTo('contact');
      }).catch(function(error){
        this.transitionTo('contact');
      });
    }
}