/**
 * Update a model
 */

Meteor.methods({
    updateModel: function (model) {
        // Save updates to a model

        if (!Meteor.userId()) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to update a model.");
        }

        // Check if the user has permission to update models
        if (!Meteor.call('checkForPermission', 'model-update')) {
            // Raise an error and send it to the client
            throw new Meteor.Error('not-authorised', "You do not have permission to update models.");
        }

        // Check that all attributes are of the correct type
        check(model, {
            _id:  String,
            projectId:  String,
            name: String,
            description: String,
            type:   String,
            comment: String,
            image: String
        });

        // Ensure mandatory fields have been completed
        if (!model._id) {
            throw new Meteor.Error('Error', "Missing model ID.");
        }
        if (!model.projectId) {
            throw new Meteor.Error('Error', "Missing project ID for model: " + model._id);
        }
        if (!model.name) {
            throw new Meteor.Error('mandatory fields', "A model name is mandatory.");
        }

        // Extract the model ID and remove the id attribute from the update object
        var modelId = model._id;
        delete model._id;

        ModelsCollection.update({_id: modelId}, {$set: model}, function (error, docsUpdated) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('database-error', "Unable to update the model. Please contact your administrator.");
            } else {
                if (docsUpdated === 1) {
                    // The number of updated documents should be one
                    console.log('Model ' + modelId + ' updated by user ' + Meteor.userId() + ' at ' + new Date());
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
