/**
 * Created by Andrew on 7/06/2015.
 */


Template.viewEditModel.events({

    // Close button is clicked, go back to the project with it's models list
    'click .close-button': function () {
        var projectId = this.project._id;

        Router.go("project", {_id: projectId});

        // Prevent default form action
        return false;
    },

    // Edit button is clicked
    'click .edit-button': function () {

        // Enable fields for editing
        $('#modelName').prop('disabled', false);
        $('#modelDescription').prop('disabled', false);
        $('#modelType').prop('disabled', false);
        $('#modelComment').prop('disabled', false);
        $('#modelIcon').prop('disabled', false);

        // Enable the save button and disable the edit button (as we are currently editing the model details)
        $('.save-button').prop('disabled', false);
        $('.edit-button').prop('disabled', true);


        // Prevent default form action
        return false;
    },

    // Save button is clicked
    'click .save-button': function () {

        var model = {
            _id: this.model._id,
            projectId:  this.project._id,
            name: $('#modelName').val(),
            description: $('#modelDescription').val(),
            type: $('#modelType').val(),
            comment: $('#modelComment').val(),
            icon: $('#modelIcon').val()
        };

        Meteor.call('updateModel', model, function (error, result) {
            if (error) {
                showError(error.error, error.reason);
            } else if (result === false) {
                showError("database-error", 'Error updating your model. Please try again');
            }
        });

        // Disable the fields for editing
        $('#modelName').prop('disabled', true);
        $('#modelDescription').prop('disabled', true);
        $('#modelType').prop('disabled', true);
        $('#modelComment').prop('disabled', true);
        $('#modelIcon').prop('disabled', true);

        // Disable the save button and enable the edit button (the save button is enabled when we are editing the projec details)
        $('.save-button').prop('disabled', true);
        $('.edit-button').prop('disabled', false);

        // Prevent default form action
        return false;
    },


});
