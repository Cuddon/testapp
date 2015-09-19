/**
 * Delete a model
 */

Meteor.methods({

    // Delete a single model
    deleteModel: function (modelId) {

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
        check(modelId, String);

        // Ensure mandatory fields have been completed
        if (!modelId) {
            throw new Meteor.Error('Error', "Missing model ID.");
        }

        ModelsCollection.remove(modelId, function (error, docsRemoved) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('database-error', "Unable to delete model: " + modelId);
            } else {
                // Success
                if (docsRemoved == 1) {
                    console.log('Model ' + modelId + ' deleted by user ' + Meteor.userId() + ' at ' + new Date());
                    return true;
                } else {
                    // model _Id not found or multiple models with the same id deleted (there should not be any)
                    throw new Meteor.Error('database-error', "Unable to delete model: " + modelId);
                }
            }
        });
    }
});

