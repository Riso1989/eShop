import Component from "@glimmer/component";
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';

export default class NavBarComponent extends Component {

  @service converter;

  @computed('converter.serviceTotal')
  get serviceTotal() {
    return this.converter.getTotal();
  }
}
