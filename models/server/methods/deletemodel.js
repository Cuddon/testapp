/**
 * Delete a model
 */

Meteor.methods({

    deleteModel: function (modelId) {
        if (!this.userId) {
            throw new Meteor.Error("logged-out", "The user must be logged in delete a model.", "Meteor.methods.deleteModel: " + projectId);
        }

        ModelsCollection.remove(modelId, function (error, docsRemoved) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('deleteModel', "Unable to delete model: " + modelId);
            } else {
                // Success
                if (docsRemoved == 1) {
                    return true;
                } else {
                    // model _Id not found or multiple models with the same id deleted (there should not be any)
                    throw new Meteor.Error('deleteModel', "Unable to delete model: " + modelId);
                }
            }
        });
    }
});

