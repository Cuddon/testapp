/**
 * Created by Andrew on 23/05/2015.
 */

// Display projects for a specific user
Router.route('projects', {
  path: '/projects',
  yieldTemplates: {
    // Render the template into the content area
    projects: {to: 'content'}
  },
  waitOn: function () {
    //Session.set('activity', "Projects");
    return Meteor.subscribe('projects');
  }
});

