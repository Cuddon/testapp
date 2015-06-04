/**
 * Add a new model to a project
 */

Meteor.methods({
  addModel: function (projectId, model) {
    if (!this.userId) {
      // Raise an error and send it to the client
      throw new Meteor.Error("logged-out", "You must be logged in to add a new model.");
    }

    // Check that the user has the appropriate permissions to add a model to this project


      // Add additional info
    if (model.icon.trim() === "") {
      model.icon = "http://lorempixel.com/56/56/nature";     // Default model logo. 56x56 px
    }
    model.ownerId = this.userId;  // Logged in user is the initial owner
    model.sharedToId = null;          // The model is not shared to anyone yet
    model.createdAt = new Date();     // current time
    model.createdBy = this.userId; // Always the user who initially created the model
    // _id is automatically created by MongoDB

    ModelsCollection.insert(model, function (error, _id) {
      if (error) {
        // Raise an error and send it to the client
        throw new Meteor.Error('addmodel', "Unable to add a new model. Please contact your administrator.");
      } else {
        // return the _id of the newly created document
        return _id;
      }
    });
  }
});

