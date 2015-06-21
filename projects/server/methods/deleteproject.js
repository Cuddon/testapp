/**
 * Delete a project
 */

Meteor.methods({

    deleteProject: function (projectId) {
        /*
            Delete a project
         */

        // Check if user is logged in
        if (!Meteor.userId()) {
            // User not logged in
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to delete a project.");
        }

        // Check if the current user is the owner or has been shared the project
        var p = ProjectsCollection.findOne(projectId);
        if ( !(p.ownerId === Meteor.userId() || p.sharedToId === Meteor.userId()) ) {
            // Raise an error and send it to the client
            throw new Meteor.Error('not-authorised', "You do not have sufficient ownership to delete this project.");
        }

        // Check if the user has permission to delete projects
        if (! Meteor.call('checkForPermission', 'project-delete') ) {
            // Raise an error and send it to the client
            throw new Meteor.Error('not-authorised', "You do not have permission to delete projects.");
        }

        // Ensure a valid project ID is provided
        check(projectId, String);

        // Ensure mandatory fields have been completed
        if (!projectId) {
            throw new Meteor.Error('Error', "Missing project ID.");
        }

        // Delete the project from the database
        ProjectsCollection.remove(projectId, function (error) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('deleteProject', "Unable to delete the project. Please contact your administrator.");
            } else {
                console.log('Project ' + projectId + ' deleted by user ' + Meteor.userId() + ' at ' + new Date());
                return true;
            }
        });
    }
});

