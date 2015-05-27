/**
 * Created by Andrew on 23/05/2015.
 */


Template.projects_list_template.helpers({
  // List of projects belonging to the user, in reverse chronological order based on created date
  projectsList: function () {
    return ProjectsCollection.find({}, {sort: {createdAt: -1}});
  }

});

