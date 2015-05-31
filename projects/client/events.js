/**
 * Created by Andrew on 26/05/2015.
 */

Template.listProjects.events({

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

    var conf = confirm("Please confirm.\nDo you want to delete project: " + this.name);
    if (conf === true) {
      // Add the new project to the database using a server method
      Meteor.call('deleteProject',projectId, function(error){
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
        Meteor.call('addProject',project, function(error){
          if (error) {
            // Display the error to the client, and stay on the same page
            showError(error.error, error.reason)
          } else {
            // Success
            Router.go("projects");
          }
        });

        // Prevent default form submit
        return false;
    },

    // addProject Cancel button is clicked, go back to projects list
    "click .cancel-button": function () {
        Router.go("projects");

        // Prevent default form action
        return false;
    }
});

Template.viewEditProject.events({

  // Cancel button is clicked, go back to the projects list
  "click .cancel-button": function () {
    Router.go("projects");

    // Prevent default form action
    return false;
  },

  // Edit button is clicked
  "click .edit-button": function () {
    alert("Not yet implemented");
    $('#name').removeAttr('disabled');

    // Enable the save button and disable the edit button (as we are currently editing the project details)
    $('button .edit-button').attr('disabled', 'disabled');
    $('button .save-button').removeAttr('disabled');


    // Prevent default form action
    return false;
  },

  // Save button is clicked
  "click .save-button": function () {
    alert("Not yet implemented");
    var name = $('#name').val();

    // Disable the save button and enable the edit button (the save button is enabled when we are editing the projec details)
    $('button .save-button').attr('disabled', 'disabled');
    $('button .edit-button').removeAttr('disabled');

    // Prevent default form action
    return false;
  }


});