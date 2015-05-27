/**
 * Created by Andrew on 26/05/2015.
 */

Template.projects_list_template.events({

  // A project card/list item is clicked
  "click div .project-item": function () {

    //Open the project view/edit template
    Router.go('project', {
      _id: this._id
    });

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
