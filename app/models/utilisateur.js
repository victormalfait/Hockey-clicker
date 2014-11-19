import DS from 'ember-data';

var Utilisateurs =  DS.Model.extend({
  login: DS.attr('string'),
  email: DS.attr('string')
});

Utilisateurs.reopenClass({
  FIXTURES: [
    {
      id: 1,
      login: "victor",
      email: "victor@ember.com"
    },
    {
      id: 2,
      login: "clément",
      email: "clement@ember.com"
    }
  ]
});

export default Utilisateurs;
