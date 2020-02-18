import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
    @attr('string') title;
    @attr('string') id;
    @attr('string') image;
    @attr('string') desc;
}
