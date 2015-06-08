
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
    // Go back to previous screen
    history.back();

    // Prevent default form action
    return false;
  }
});
