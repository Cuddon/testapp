/**
 * Delete a model
 */

Meteor.methods({

    deleteAllModelsforProject: function (projectId) {

        if (!Meteor.userId()) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to delete a model.");
        }

        // Check if the user has permission to delete models
        if (!Meteor.call('checkForPermission', 'model-delete')) {
            // Raise an error and send it to the client
            throw new Meteor.Error('not-authorised', "You do not have permission to delete models.");
        }

        // Check that all attributes are of the correct type
        check(projectId, String);

        // Ensure mandatory fields have been completed
        if (!projectId) {
            throw new Meteor.Error('Error', "Missing model ID.");
        }


        // Remove all models for this project that are owned by the curent user
        ModelsCollection.remove({
            projectId: projectId,
            ownerId: Meteor.userId()
        }, function (error, itemsRemoved) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('database-error', "Unable to delete model: " + modelId);
            } else {
                // Success
                console.log('All ' + itemsRemoved + ' models deleted for project ' + projectId +' by user ' + Meteor.userId() + ' at ' + new Date());
            }
        });
    }
});

