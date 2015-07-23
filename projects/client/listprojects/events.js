/*
 * List Projects template events
 * */

Template.listProjects.events({

    // Add a new Project
    "click #addproject": function () {
        Router.go("addproject");

        // Prevent default form action
        return false;
    },


    // A project card/list item is clicked
    "click .project-item": function () {
        var projectId = this._id;

        //Open the selected project view/edit template
        Router.go('project', {_id: projectId});

        // Prevent default form submit
        return false;
    },


    // Cancel button is clicked, go back to home page
    "click .cancel-button": function () {
        Router.go("/home");

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

        var projectId = this._id;
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

        // Prevent default form action
        return false;
    }


});

