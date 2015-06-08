/**
 * Update a project
 */

Meteor.methods({
  updateProject: function (project) {
    // Save updates to a project

    check(project, {
      _id:  String,
      name: String,
      description: String,
      comment: String,
      createdBy:  Match.Optional(String),
      ownerID:    Match.Optional(String),
      // Optional, but if present must be an array of strings.
      sharedToId: Match.Optional([String])
    });

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
        throw new Meteor.Error('updateProject', "Unable to update the project. Please contact your administrator.");
      } else {
        if (docsUpdated === 1) {
          // The number of updated documents should be one
          console.log('Project update ok: ' + projectId)
          return true;
        } else if (docsUpdated === 0) {
          // Project not found so could not be updated
          throw new Meteor.Error("database-error", "Project " + projectId +" does not exist so cannot be updated ("+ docsUpdated +").");
        } else {
          // More than one matching project found
          throw new Meteor.Error("database-error", "Project " + projectId +" appears to exist more than once ("+ docsUpdated +").");
        }
      }
    });
  }
});
