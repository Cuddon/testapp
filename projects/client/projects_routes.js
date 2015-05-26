/**
 * Created by Andrew on 23/05/2015.
 */

// Display projects for a specific user
Router.route('/projects', function () {
  // Render the template into the content area
  this.render('projects', {to: 'content'});
  Session.set('activity', "Projects");
});

