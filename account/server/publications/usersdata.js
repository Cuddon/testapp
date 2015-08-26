/*
 * Additional 'user' data publications
 */


// Publish a record set 'userData' from the built in Meteor.users collection (which does not need to be declared)
Meteor.publish("userData", function () {
    /*
     Publish additional user data from the user's record
     client: Meteor.subscribe("userData");
     */

    if (this.userId) {
        // User is logged in
        check(this.userId, String);

        // Select a record only for the current user
        var selector = {_id: this.userId};

        // Publish only the account and roles fields
        var options = {
            fields: {
                account: 1,
                roles: 1
            }
        };
        return Meteor.users.find(selector, options);
    } else {
        // User is not logged in so do not return anything
        this.ready();
    }
});

/*
 UserDataCollection.deny({
 update: function() {
 return true;
 }
 });
 */
