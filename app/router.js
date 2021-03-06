import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('users');
  this.route('books');
  this.route('bookName', { path: '/bookName/:book_name' });
  this.route('cart');
  this.route('emptyCart');
  this.route('orderSent');
});
