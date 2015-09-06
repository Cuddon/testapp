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

    // Notes field is updated
    // Edit button is clicked
    "change #notes": function () {
       // alert("Not implemented");
        var project = {
            _id: this.project._id,
            notes: $('#notes').val()
        };

        // Update the notes using a server method
        Meteor.call('updateProjectNotes', project, function (error) {
            if (error) {
                // Display the error to the client
                showError(error.error, error.reason);
            }
        });

        // Prevent default form action
        return false;
    },


    // Edit button is clicked
    "click .edit-button": function () {
        //alert("Not implemented");
        var projectId = this.project._id;
        Router.go('/editproject/' + projectId);

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
                    showError(error.error, error.reason);
                }
            });
        }

        Router.go("projects");

        // Prevent default form action
        return false;
    }

});
