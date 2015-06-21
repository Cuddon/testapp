
Template.auth.helpers({
    currentUserName: function () {
        return Meteor.user() && Meteor.user().username;         // handles where no current user logged in
    },
    currentUserId: function () {
      return Meteor.userId();
    }
  });
