
//AccountsTemplates.configureRoute('signIn');



// Authorisation page
Router.route('/account', function () {
    // Render the about page into the content area
    this.render('account', {to: 'content'});
    Session.set('activity', "Account");
});
