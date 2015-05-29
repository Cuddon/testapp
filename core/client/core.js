
/*
  Core
 */


Meteor.startup(function () {
    // Anything we need to do before much else happens
});


Template.topnav.helpers({
  appName: function(){
    return Session.get("appName");
  },
  activity: function(){
    return Session.get('activity');
  }
});


Session.setDefault('errorMessages', ["Error 1", "Error Message 2"]);
Template.errors.helpers({
  errorMessages: function(){
    return Session.get("errorMessages");
  }
});

function addErrorMessage(msg) {
  Session.set('errorMessages', Session.get('errorMessages').push(msg));
}




