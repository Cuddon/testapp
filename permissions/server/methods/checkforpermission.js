/**
 *  Server-side method to check whether a user action is permitted
 */

Meteor.methods({

    checkForPermission: function (action) {
        /**
         *
         *  Server-side method to check where a user action is permitted
         *  DOES NOT CHECK OWNERSHIP OF AN ITEM (Project, Model etc)
         *
         */

        // Check if user is logged in
        if (!Meteor.userId()) {
            // User not logged in,so no actions permitted
            return false;
        }

        check(action, String);

        // Current user record
        var user = Meteor.users.findOne({_id: Meteor.userId()});

        if (!user) {
            // User not found, so decline permission
            return false;
        }

        if (!user.roles) {
            // No roles for the user, so decline permission
            return false;
        }

        // Iterate through the user's roles and check the desired action against the permissions for each role
        // Stop if the correct permission is found
        var i, role, permissions, permitted=false;
        for (i = 0; i < user.roles.length; i++) {
            role = user.roles[i];

            // permissions for the role
            permissions =  settings.roleBasedPermissions[role];

            // check permissions for that role
            if(_.contains(permissions, action)) {
                // Action permitted
                permitted = true;
                break;
            }
        }

        return permitted;
    }

});
