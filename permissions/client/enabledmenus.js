/**
 *  Reactive sessions variable and helper to identity which menus should be enabled
 */

Session.setDefault('enabledMenus', {});

Template.registerHelper('isMenuEnabled', function(){
    return Session.get('enabledMenus');
});


Tracker.autorun(function() {
    /**
     *
     *  Update the session variable reactively whenever the account type changes
     *  todo: move menu permissions to database and read on startup rather than having a .js file containing all menu permissions
     */
    var accountType;

    if ( !Meteor.user() ) {
        // User not logged in
        accountType = 0;        // User not logged in or no account
    } else if (!Meteor.user().profile || !Meteor.user().profile.account || !Meteor.user().profile.account.type) {
        // No account or no account type
        accountType = 0;
    } else {
        // User logged in and account type set
        // Look up the enabled menus using the account type
        // Account type e.g. = 100 (Foundation)
        accountType = Meteor.user().profile.account.type;
    }

    // Menus enabled for the user's account type
    // enabledMenus e.g. = {home: true, projects: true}
    Session.set('enabledMenus', clientSettings.enabledMenus[accountType]);
});






