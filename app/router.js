import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('category');
  this.route('budget');
  this.route('payee');
  this.route('ledger');
  this.route('categories');
  this.route('budgets');
  this.route('payees');
  this.route('ledgers');
  this.route('reports');
  this.route('inventories');
});
