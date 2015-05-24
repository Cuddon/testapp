/**
 * Created by Andrew on 23/05/2015.
 */

// Display myprojects for a specific user
Router.route('/myprojects', function () {
  // Render the about page into the content area
  this.render('myprojects', {to: 'content'});
  Session.set('activity', "Projects");
});

// Add a new project
Router.route('/addproject', function () {
  // Render the about page into the content area
  //this.render('addproject', {to: 'content'});
  Router.go("addproject");
  Session.set('activity', "Add a new project");
});