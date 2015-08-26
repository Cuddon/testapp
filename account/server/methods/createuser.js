/**
 * Created by andrew on 24/08/2015.
 */

Meteor.methods({
    createNewUser: function (options) {

        //TODO: Check if this is secure sending the password to a method or should we call Accounts.createUser from the client
        // Check that all attributes are of the correct type
        check(options, {
            username: undefined,
            email: String,
            password: String,       // bcrypt password
            profile: {
                name: String
            }
        });
        Accounts.createUser(options);
    }
});


Accounts.onCreateUser(function (options, user) {
    // Add additional fields (server use only, never transmitted to a client)
    // 'options' comes from Accounts.createUser
    // 'user' is the new user object that is about to be saved

    check(options, {
        profile: {
            name: String
        }
    });

    user.profile.name = options.profile.name.trim();
    user.account = {
        type: 100           // Foundation Free
    };

    // Default roles for role based permissions
    // Not in the user's profile because we hide these server side
    user.roles = [
        'allUsers',
        'projectOwner'
    ];

    return user;
});

// Called automatically by the accounts package
Accounts.validateNewUser(function (user) {
    // Check that all attributes are of the correct type
    check(user, {
        email: String,
        username: undefined,
        profile: {
            name: String
        }
    });

    // Check for valid email address

    // Ensure mandatory fields have been completed
    if (!user.profile.name.trim()) {
        throw new Meteor.Error('User name', "A user name is mandatory.");
    }

    if (!user.profile.name.trim().length < 4) {
        throw new Meteor.Error('User name', "A user name must be a minimum of 3 character.");
    }

    // New user details validated
    console.log('New User is valid')
    return true;
});


