/**
 * AddModel events
 */


Template.addModel.events({

  // Add model form is submitted
  "submit": function (event) {

    var projectId = this.project._id;

    // Insert a new document into the models collection
    var model = {
      name:         event.target.modelname.value,
      description:  event.target.modeldescription.value,
      type:         event.target.modeltype.value,
      comment:      event.target.modelcomment.value,
      icon:         event.target.modelicon.value,
      projectId:    projectId
    };

    // Add the new model to the database using a server method
    Meteor.call('addModel', model, function(error){
      if (error) {
        // Display the error to the client, and stay on the same page
        showError(error.error, error.reason)
      } else {
        // Success
        Router.go("project", {_id: projectId});
      }
    });

    // Prevent default form submit
    return false;
  },


  // addModel Cancel button is clicked, go back to models list
  "click .cancel-button": function () {
      // Go back to previous screen
      history.back();

      // Prevent default form action
      return false;
  }
});

