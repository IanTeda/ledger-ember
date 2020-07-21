import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | inventories', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:inventories');
    assert.ok(route);
  });
});
