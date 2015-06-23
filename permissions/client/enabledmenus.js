/**
 *  Reactive sessions variable and helper to identity which menus should be enabled
 */

Session.setDefault('enabledMenus', {});

Template.registerHelper('isMenuEnabled', function(){
    return Session.get('enabledMenus');
});


Tracker.autorun(function() {
    /**
    *   Update the session variable reactively whenever the account type changes
    */
    var accountType;

    if (!Meteor.user() || !Meteor.user().account || !!Meteor.user().account.type) {
        // User not logged in, or no account or no account type
        accountType = 0;        // User not logged in or no account
    } else {
        // User loggged in and accout type set
        // Look up the enabled menus using the account type
        // Account type e.g. = 100 (Foundation)
        accountType = Meteor.user().account.type;
    }

    // Menus enabled for the user's account type
    // enabledMenus e.g. = {home: true, projects: true}
    Session.set('enabledMenus', clientSettings.enabledMenus[accountType]);
});






