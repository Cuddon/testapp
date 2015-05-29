/**
 * /projects/client/routes.js
 */

// List projects for the current user
Router.route('/projects', {
  name: 'projects',

  subscriptions:  function () {
    return Meteor.subscribe("projects");
  },

  action: function() {
    // Render the template into the content area
    this.render('listProjects', {to: 'content'});
    Session.set('activity', "My Projects");
  }
});

// Add a new project
Router.route('/addproject', function () {
    // Render the template into the content area
    this.render('addProject', {to: 'content'});
    Session.set('activity', "Add a new project");
});


// View/edit a single project
Router.route('/project/:_id', {
  name: 'project',

  subscriptions:  function () {
    console.log('Subscribe: ' + this.params._id);
    return Meteor.subscribe("project", this.params._id);
  },

  action: function() {
    // Render the template into the content area
    console.log('Now render the template: ' + this.params._id);
    this.render('viewEditProject', {to: 'content'});
    Session.set('activity', "View/Edit project: " + this.params._id);
  }
});

/*Router.route('/project/:_id', function () {
  this.render('project', {
    data: function () {
      return ProjectsCollection.findOne({_id: this.params._id});
    }
  });
  Session.set('activity', "View/Edit and existing project");
});*/
