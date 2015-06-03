/**
 * /models/client/routes.js
 */

// Add a new model for a specific project

Router.route('/project/:projectId/addmodel', {
    name: 'addmodel',

    subscriptions:  function () {
        // This limits what the client can see (what is synced to the minimongo on the client)
        // This is just to get the project name into the template
        // The model details are saved to a models collection
        return Meteor.subscribe("project", this.params.projectId);
    },


    data: function() {
        // Set the data context for the template (client reads from the local minimongo DB)
        //return {projectId: this.params.projectId};
        // This is just to get the project name into the template
        // The model details are saved to a models collection
        return ProjectsCollection.findOne({_id: this.params.projectId},{fields: {_id: 1, name: 1}});
        //return ProjectsCollection.findOne({_id: this.params.projectId});
    },

    action: function() {
        // Render the template into the content area
        if (Meteor.userId()) {
          this.render('addModel', {to: 'content'});
          Session.set('activity', "Add a new model");
        } else {
          alert ("You must be logged in to add a new model");
          this.render('Home', {to: 'content'});
          Session.set('activity', "Home");
        }
    }
});


// List models for the current user
// MOVE TO THE BOTTON OF A SINGLE PROJECT TEMPLATE
Router.route('/models', {
  name: 'models',

  subscriptions:  function () {
    return Meteor.subscribe("models");
  },

  data: function() {
    return {modelsList: ModelsCollection.find({}, {sort: {createdAt: -1}})};
  },

  action: function() {
    // Render the template into the content area
    if ( Meteor.userId() ) {
      this.render('listModels', {to: 'content'});
      Session.set('activity', "My Models");
    } else {
      alert ("You must be logged in to view your models");
      this.render('Home', {to: 'content'});
      Session.set('activity', "Home");
    }
  }
});



// View/edit a single model
Router.route('/project/:projectId/model/:_id', {
  name: 'model',

  subscriptions:  function () {
    // This limits what the client can see (what is synced to the minimongo on the client)
    return Meteor.subscribe("model", this.params._id);
  },

  data: function() {
    // Set the data context for the template (client reads from the local minimongo DB)
    return ModelsCollection.findOne({_id: this.params._id});
  },

  action: function() {
    // Render the template into the content area
    this.render('viewEditModel', {to: 'content'});
    Session.set('activity', "View/Edit model");
  }
});


