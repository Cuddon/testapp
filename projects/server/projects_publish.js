/**
 * Created by Andrew on 26/05/2015.
 */

// All projects note should really limit these to a user and specific fields
Meteor.publish('myprojects', function(){
  //Check that the user is logged in
  // this.userId is null if no user is logged in
  check(this.userId, String);

  // Return only projects that belong to (were created by I presume) the logged in user
  return ProjectsCollection.find({
    owner: this.userId
  });
});


//{ owner: this.userId }