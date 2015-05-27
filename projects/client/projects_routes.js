/**
 * Created by Andrew on 23/05/2015.
 */

// Display projects for a specific user

Router.route('/projects', function () {
  // Render the about page into the content area
  this.render('projects_list_template', {to: 'content'});
  Session.set('activity', "My Projects");
});

