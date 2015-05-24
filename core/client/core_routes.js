// Core module routes

/*
    Default layout for all routes
    Cane be overridden in a single route by:
    this.layout('ApplicationLayout');
*/

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});


// Client routes

// Home page
Router.route('/', function () {
    // Render the about page into the content area
    this.render('Home', {to: 'content'});
    Session.set('activity', "Home");
});

// About page
Router.route('/about', function () {
    // Render the about page into the content area
    this.render('about', {to: 'content'});
    Session.set('activity', "About");
});


