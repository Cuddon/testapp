/**
 * /projects/client/routes.js
 */

// List projects for the current user
Router.route('/projects', {
  name: 'projects',

  subscriptions:  function () {
    return Meteor.subscribe("projects");
  },

  data: function() {
        return {projectsList: ProjectsCollection.find({}, {sort: {createdAt: -1}})};
  },

  action: function() {
    // Render the template into the content area
    if ( Meteor.userId() ) {
      this.render('listProjects', {to: 'content'});
      Session.set('activity', "My Projects");
    } else {
      alert ("You must be logged in to view your projects");
      this.render('Home', {to: 'content'});
      Session.set('activity', "Home");
    }
  }
});

// Add a new project
Router.route('/addproject', function () {
  if ( Meteor.userId() ) {
    // Render the template into the content area
    this.render('addProject', {to: 'content'});
    Session.set('activity', "Add a new project");
  } else {
    alert ("You must be logged in to add a new project");
    this.render('Home', {to: 'content'});
    Session.set('activity', "Home");
  }
});


// View/edit a single project
Router.route('/project/:_id', {
  name: 'project',

  subscriptions:  function () {
    // This limits what the client can see (what is synced to the minimongo on the client)
    return Meteor.subscribe("project", this.params._id);
  },

  data: function() {
    // Set the data context for the template (client reads from the local minimongo DB)
    return ProjectsCollection.findOne({_id: this.params._id});
  },

  action: function() {
    // Render the template into the content area
    this.render('viewEditProject', {to: 'content'});
    Session.set('activity', "View/Edit project");
  }
});


