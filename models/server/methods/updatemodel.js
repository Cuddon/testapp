/**
 * Update a model
 */

Meteor.methods({
    updateModel: function (model) {
        // Save updates to a project

        check(model, {
            _id:  String,
            projectId:  String,
            name: String,
            description: String,
            type:   String,
            comment: String,
            createdBy:  Match.Optional(String),
            ownerID:    Match.Optional(String)
        });

        if (!this.userId) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to edit a model.");
        }

        // Check if the user has the correct permissions to edit a project

        // Extract the model ID and remove the id attribute from the update object
        var modelId = model._id;
        delete model._id;

        ModelsCollection.update({_id: modelId}, {$set: model}, function (error, docsUpdated) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('updateModel', "Unable to update the model. Please contact your administrator.");
            } else {
                if (docsUpdated === 1) {
                    // The number of updated documents should be one
                    console.log('Model update ok: ' + modelId)
                    return true;
                } else if (docsUpdated === 0) {
                    // Project not found so could not be updated
                    throw new Meteor.Error("database-error", "Model " + modelId +" does not exist so cannot be updated ("+ docsUpdated +").");
                } else {
                    // More than one matching project found
                    throw new Meteor.Error("database-error", "Model " + modelId +" appears to exist more than once ("+ docsUpdated +").");
                }
            }
        });
    }
});
