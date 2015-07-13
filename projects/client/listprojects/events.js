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

    "click .about": function () {
        Router.go("/about");

        // Prevent default form action
        return false;
    },

    // A project card/list item is clicked
    "click div .project-item, click a .project-item": function () {
        var projectId = this._id;

        //Open the selected project view/edit template
        Router.go('project', {_id: projectId});

        // Prevent default form submit
        return false;
    },

    // Cancel button is clicked, go back to projects list
    "click .cancel-button": function () {
        Router.go("projects");

        // Prevent default form action
        return false;
    },

    // Clone button is clicked
    "click .project-clone": function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

    // Share button is clicked
    "click .project-share": function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

    // Delete button is clicked
    "click .project-delete": function () {
        var projectId = this._id;

        var conf = confirm("Please confirm.\nDo you want to delete project: " + this.name + ". \n***This will also delete all models and steps used by this project.***");
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
        //return false;
    }


});

