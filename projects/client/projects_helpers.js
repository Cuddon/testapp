/**
 * Created by Andrew on 23/05/2015.
 */

Template.projects.helpers({
  // List of projects belonging to the user, in reverse chronological order based on created date
  projects: function () {
    return Projects.find({}, {sort: {createdAt: -1}});
  }

});

