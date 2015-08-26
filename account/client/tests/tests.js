/*
* Client side security tests
*
* */

// **** User Record ****

// Get all users
// Do this after multiple users have logged in and out of the current browser session
// Expected result: only the current logged in user record should be returned
// Should return only those fields the client/user needs/needs to see
Meteor.users.find({}).fetch();

// Update the name for the current user
// Expected result: 1 record updated
Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: {name: "Fred Nerk"}}});

// Update the account type for the current user
// Expected result: Update failed: Access denied (because a user is not allowed to update this field)
Meteor.users.update({_id: Meteor.userId()}, {$set: {account: {type: "123456"}}});

// Append a new role for the current user
// Expected result: Update failed: Access denied (because a user is not allowed to update this field)
Meteor.users.update({_id: Meteor.userId()}, {$push: {roles: "aNewRole"}});

// Completely replace the current profile for a user
// Expected result: 1 record updated (but possible issues if important profile info (such as name) is deleted

// Remove the current user record
// Expected result: remove failed: Access denied. No allow validators set on restricted collection for method 'remove'.
Meteor.users.remove(this._id);
