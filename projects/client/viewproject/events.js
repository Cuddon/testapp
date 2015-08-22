/**
 * View/edit a project
 * Add a new model
 */


Template.viewProject.events({

    // Back button is clicked, go back to the previous screen (typically the user's projects list)
    "click .back-button": function () {
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
        $('#projectLogo').prop('disabled', false);

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
            name: $('#projectName').val(),
            description: $('#projectDescription').val(),
            comment: $('#projectComment').val(),
            logo: $('#projectLogo').val()
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
        $('#projectLogo').prop('disabled', true);

        // Disable the save button and enable the edit button (the save button is enabled when we are editing the projec details)
        $('.save-button').prop('disabled', true);
        $('.edit-button').prop('disabled', false);

        // Prevent default form action
        return false;
    },


    // Clone button is clicked
    "click .clone-button": function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

    // Share button is clicked
    "click .share-button": function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

    // Share button is clicked
    "click .info-button": function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },


    // Delete button is clicked
    "click .delete-button": function () {
        // TODO: Deleting a project should delete all models and steps
        // TODO: If not empty then deleting a model should require a second confirmation from the user. User shoudl type the model name exactly

        var projectId = this.project._id;
        var conf = confirm("Please confirm.\nDo you want to delete project: " + this.name + ". \n\n***This will also delete all models and steps used by this project.***");
        if (conf === true) {
            // Add the new project to the database using a server method
            Meteor.call('deleteProject', projectId, function (error) {
                if (error) {
                    // Display the error to the client
                    showError(error.error, error.reason)
                }
            });
        }

        Router.go("projects");

        // Prevent default form action
        return false;
    }

});
