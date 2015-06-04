/**
 * Update a project
 */

Meteor.methods({
  updateProject: function (project) {
    // Save updates to a project
    if (!this.userId) {
      // Raise an error and send it to the client
      throw new Meteor.Error("logged-out", "You must be logged in to edit a new project.");
    }

    // Check if the user has the correct permissions to edit a project

    // Extract the project ID and remove the id attribute from the update object
    var projectId = project._id;
    delete project._id;

    ProjectsCollection.update({_id: projectId}, {$set: project}, function (error, docsUpdated) {
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('addProject', "Unable to add a new project. Please contact your administrator.");
      } else {
        if (docsUpdated === 1) {
          // The number of updated documents should be one
          return true;
        } else {
          throw new Meteor.Error("database-error", "This project appears to exist more than once.");
        }
      }
    });
  }
});
