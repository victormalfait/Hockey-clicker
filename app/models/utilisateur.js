import DS from 'ember-data';

var Utilisateurs =  DS.Model.extend({
  login: DS.attr('string'),
  email: DS.attr('string'),
  points: DS.attr('number')
});

Utilisateurs.reopenClass({
  FIXTURES: [
    {
      id: 1,
      login: "victor",
      email: "victor@ember.com",
      points: 30
    },
    {
      id: 2,
      login: "clément",
      email: "clement@ember.com",
      points: 17
    }
  ]
});

export default Utilisateurs;
