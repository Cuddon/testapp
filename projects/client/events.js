/**
 * Created by Andrew on 26/05/2015.
 */

Template.listProjects.events({

  // A project card/list item is clicked
  "click div .project-item": function () {

    var projectId = this._id;
    console.log('Selected project: ' + projectId);

    //Open the project view/edit template
    Router.go('project', {_id: projectId});

    // Prevent default form submit
    return false;
  },

  // Cancel button is clicked, go back to projects list
  "click .cancel-button": function () {
    Router.go("projects");

    // Prevent default form action
    return false;
  }
});


Template.addProject.events({
    // Add project form is submitted
    "submit": function (event) {

        // Insert a new document into the projects collection
        var project = {
            name:         event.target.name.value,
            description:  event.target.description.value,
            comment:      event.target.comment.value,
            logo:         event.target.logo.value
        };

        // Add the new project to the database using a server method
        Meteor.call('addProject',project);

        Router.go("projects");

        // Prevent default form submit
        return false;
    },

    // Add projecct Cancel button is clicked, go back to projects list
    "click .cancel-button": function () {
        Router.go("projects");

        // Prevent default form action
        return false;
    }
});
