import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    needs: ['service:metrics', 'service:session', 'service:theme', 'service:toast'],
});

// Replace this with your real tests.
test('it exists', function(assert) {
    const controller = this.subject();
    assert.ok(controller);
});
