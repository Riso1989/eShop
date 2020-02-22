import Model, {attr} from '@ember-data/model';

export default class OrderModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr price;
  @attr bookIds;
}