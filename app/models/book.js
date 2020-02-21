import Model, {attr} from '@ember-data/model';

export default class BookModel extends Model {
    @attr title
    @attr desc
    @attr avatar
    @attr price
    @attr currency
}