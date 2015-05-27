/**
 * Created by Andrew on 26/05/2015.
 */

Template.addproject.events({

  // Form is submitted
  "submit": function (event) {

    // Insert a new document into the projects collection
    var project = {
      name:         event.target.name.value,
      description:  event.target.description.value,
      comment:      event.target.comment.value,
      logo:         event.target.logo.value,
      owner:        this.userId,
      createdAt:    new Date() // current time
      // id is automatically created by MongoDB
    };

    if (!project.logo) {
      project.logo = "http://lorempixel.com/56/56/nature";     // Default project logo. 56x56 px
    }
    ProjectsCollection.insert(project);

    // Clear form
    //event.target.name.value = "";

    Router.go("projects");

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
