/**
 * Add a new project
 */

Meteor.methods({
  addProject: function (project) {
    if (!this.userId) {
      // Raise an error and send it to the client
      throw new Meteor.Error("logged-out", "You must be logged in to add a new project.");
    }

    if (project.logo.trim() === "") {
      project.logo = "http://lorempixel.com/56/56/nature";     // Default project logo. 56x56 px
    }
    project.ownerId = this.userId;  // Logged in user is the initial owner
    project.sharedToId = null;          // The project is not shared to anyone yet
    project.createdAt = new Date();     // current time
    project.createdBy = this.userId; // Always the user who initially created the project
    // _id is automatically created by MongoDB

    ProjectsCollection.insert(project, function (error, _id) {
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('addProject', "Unable to add a new project. Please contact your administrator.");
      } else {
        // return the _id of the newly created document
        return _id;
      }
    });
  },
});

