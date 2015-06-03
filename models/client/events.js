/**
 * Created by Andrew on 26/05/2015.
 */

/*
Template.listModels.events({

  // A model card/list item is clicked
  "click div .model-item, click a .model-item": function () {
    var modelId = this._id;

    //Open the selected model view/edit template
    Router.go('model', {_id: modelId});

    // Prevent default form submit
    return false;
  },

  // Cancel button is clicked, go back to models list
  "click .cancel-button": function () {
    Router.go("models");

    // Prevent default form action
    return false;
  },

  // Clone button is clicked
  "click .model-clone": function () {
    alert("Not implemented");

    // Prevent default form action
    //return false;
  },

  // Share button is clicked
  "click .model-share": function () {
    alert("Not implemented");

    // Prevent default form action
    //return false;
  },

  // Delete button is clicked
  "click .model-delete": function () {
    var modelId = this._id;

    var conf = confirm("Please confirm.\nDo you want to delete model: " + this.name);
    if (conf === true) {
      // Add the new model to the database using a server method
      Meteor.call('deleteModel',modelId, function(error){
        if (error) {
          // Display the error to the client
          showError(error.error, error.reason)
        }
      });
    }

    // Prevent default form action
    //return false;
  }


});
*/

Template.addModel.events({
  // Add model form is submitted
  "submit": function (event) {

    // Insert a new document into the models collection
    var model = {
      name:         event.target.name.value,
      description:  event.target.description.value,
      type:         event.target.type.value,
      comment:      event.target.comment.value,
      logo:         event.target.logo.value
    };

    // Add the new model to the database using a server method
    Meteor.call('addModel',model, function(error){
      if (error) {
        // Display the error to the client, and stay on the same page
        showError(error.error, error.reason)
      } else {
        // Success
        Router.go("models");
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

/*
Template.viewEditModel.events({

  // Cancel button is clicked, go back to the models list
  "click .cancel-button": function (event) {
    Router.go("models");

    // Prevent default form action
    return false;
  },

  // Edit button is clicked
  "click .edit-button": function (event) {

    // Enable fields for editing
    $('#name').prop('disabled', false);
    $('#description').prop('disabled', false);
    $('#type').prop('disabled', false);
    $('#comment').prop('disabled', false);

    // Enable the save button and disable the edit button (as we are currently editing the model details)
    $('.save-button').prop('disabled', false);
    $('.edit-button').prop('disabled', true);


    // Prevent default form action
    return false;
  },

  // Save button is clicked
  "click .save-button": function (event) {

    var model = {
      _id:          this._id,
      name:         $('#name').val(),
      description:  $('#description').val(),
      type:         $('#type').val(),
      comment:      $('#comment').val(),
    };

    Meteor.call('updateModel', model, function(error) {
      if (error) {
        alert(error.reason);
      }
    });

    // Disable the fields for editing
    $('#name').prop('disabled', true);
    $('#description').prop('disabled', true);
    $('#type').prop('disabled', true);
    $('#comment').prop('disabled', true);

    // Disable the save button and enable the edit button (the save button is enabled when we are editing the projec details)
    $('.save-button').prop('disabled', true);
    $('.edit-button').prop('disabled', false);

    // Prevent default form action
    return false;
  }


});

  */