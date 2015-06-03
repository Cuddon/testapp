/**
 * Server methods that can be called by a client.
 * Especially useful for:
 *      more secure database manipulation (clients do not see the other fields etc)
 *      additional stuff that needs to happen before an insert command
 *      and heavy calcs that you want to run on the server
 */

Meteor.methods({
  addModel: function(model) {
    if ( !this.userId ) {
      // Raise an error and send it to the client
      throw new Meteor.Error("logged-out", "You must be logged in to add a new model.");
    }

    if (model.logo.trim() === "") {
      model.logo = "http://lorempixel.com/56/56/nature";     // Default model logo. 56x56 px
    }
    model.ownerId = this.userId;  // Logged in user is the initial owner
    model.sharedToId = null;          // The model is not shared to anyone yet
    model.createdAt = new Date();     // current time
    model.createdBy = this.userId; // Always the user who initially created the model
    // _id is automatically created by MongoDB

    ModelsCollection.insert(model, function(error, id){
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('addModel', "Unable to add a new model. Please contact your administrator.");
      } else {
        // return the id of the newly created document
        return id;
      }
    });
  },

  updateModel : function(model) {
    // Save updates to a model
    if ( !this.userId ) {
      // Raise an error and send it to the client
      throw new Meteor.Error("logged-out", "You must be logged in to edit a new model.");
    }

    // Extract the model ID and remve the id attribute from the update object
    var modelId = model._id;
    delete model._id;

    ModelsCollection.update({_id: modelId}, {$set: model}, function(error, docsUpdated){
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('addModel', "Unable to add a new model. Please contact your administrator.");
      } else {
        if (docsUpdated === 1) {
          // The number of updated documents should be one
          return true;
        } else {
          throw new Meteor.Error("database-error", "This model appears to exist more than once.");
        }
      }
    });
  },

  deleteModel : function(modelId) {
    if (! this.userId) {
      throw new Meteor.Error("logged-out", "The user must be logged in to post a comment.", "Meteor.methods.deleteModel: " + modelId);
    }
    ModelsCollection.remove(modelId, function(error) {
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('deleteModel', "Unable to delete the model. Please contact your administrator");
      } else {
        // Success
        return true;
      }
    });
  },

  cloneModel : function() {
    //
  },

  shareModel : function() {
    //
  },

  checkModel : function() {
    // Check model structure, internal consistency etc
  }
});
