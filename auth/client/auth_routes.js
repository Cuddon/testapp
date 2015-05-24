
AccountsTemplates.configureRoute('signIn');



// Authorisation page
Router.route('/auth', function () {
    // Render the about page into the content area
    this.render('auth', {to: 'content'});
    Session.set('activity', "Account");
});
