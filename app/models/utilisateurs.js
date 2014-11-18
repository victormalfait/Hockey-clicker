import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  email: DS.attr('string')
});

// export default DS.FixtureAdapter.extend({
//    login: 'victor',
//    email: 'victor@ember.com',
//  });
