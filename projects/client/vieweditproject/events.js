/**
 * View/edit a project
 * Add a new model
 */

Template.viewEditProject.events({

  // Cancel button is clicked, go back to the previous screen (typically the user's projects list)
  "click .close-button": function () {
    // Go back to previous screen
    //history.back();
    Router.go("projects");

    // Prevent default form action
    return false;
  },

  // Edit button is clicked
  "click .edit-button": function () {

    // Enable fields for editing
    $('#projectName').prop('disabled', false);
    $('#projectDescription').prop('disabled', false);
    $('#projectComment').prop('disabled', false);

    // Enable the save button and disable the edit button (as we are currently editing the project details)
    $('.save-button').prop('disabled', false);
    $('.edit-button').prop('disabled', true);


    // Prevent default form action
    return false;
  },

  // Save button is clicked
  "click .save-button": function () {

    var project = {
      _id: this.project._id,
      name:         $('#projectName').val(),
      description:  $('#projectDescription').val(),
      comment:      $('#projectComment').val()
    };

    // Call the server method to update the project
    Meteor.call('updateProject', project, function (error, result) {
      if (error) {
        showError(error.error, error.reason);
      } else if (result === false) {
        showError("database-error", 'Error updating your project. Please try again');
      }
    });

    // Disable the fields for editing
    $('#projectName').prop('disabled', true);
    $('#projectDescription').prop('disabled', true);
    $('#projectComment').prop('disabled', true);

    // Disable the save button and enable the edit button (the save button is enabled when we are editing the projec details)
    $('.save-button').prop('disabled', true);
    $('.edit-button').prop('disabled', false);

    // Prevent default form action
    return false;
  },

  // A model card/list item is clicked
  "click div .model-item, click a .model-item": function () {
    var modelId = this._id;
    var projectId = this.projectId;

    //Open the selected project view/edit template
    Router.go('model', {projectId: projectId,_id: modelId});

    // Prevent default form submit
    return false;
  },

  // Add model button is clicked
  "click .add-model": function () {
    var projectId = this.project._id;

    //Open the selected model view/edit template
    Router.go('addmodel', {projectId: projectId});

    // Prevent default form submit
    return false;
  }


});