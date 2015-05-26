/**
 * Created by Andrew on 26/05/2015.
 */

// Add a new project
Router.route('/addproject', function () {
  // Render the template into the content area
  this.render('addproject', {to: 'content'});
  Session.set('activity', "Add a new project");
});
