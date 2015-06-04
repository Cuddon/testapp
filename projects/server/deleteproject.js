/**
 * Delete a project
 */

Meteor.methods({

    deleteProject: function (projectId) {
        if (!this.userId) {
            throw new Meteor.Error("logged-out", "The user must be logged in to post a comment.", "Meteor.methods.deleteProject: " + projectId);
        }
        ProjectsCollection.remove(projectId, function (error) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('deleteProject', "Unable to delete the project. Please contact your administrator");
            } else {
                // Success
                return true;
            }
        });
    }
});

