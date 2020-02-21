import Model, {attr} from '@ember-data/model';

export default class CartModel extends Model {
  @attr title
  @attr avatar
  @attr price
  @attr currency
}
