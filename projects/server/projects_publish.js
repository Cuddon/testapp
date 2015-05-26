/**
 * Created by Andrew on 26/05/2015.
 */

// All projects note should really limit these to a user
Meteor.publish('projects', function(){
  return Projects.find({});
});
