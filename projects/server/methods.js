/**
 * Server methods that can be called by a client.
 * Especially useful for:
 *      more secure database manipulation (clients do not see the other fields etc)
 *      additional stuff that needs to happen before an insert command
 *      and heavy calcs that you want to run on the server
 */

Meteor.methods({
    'log': function(text){
        console.log(text);
    }
});

Meteor.methods({
    'addProject': function(project) {
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized. Please log in.");
        }

        if (project.logo.trim() === "") {
            project.logo = "http://lorempixel.com/56/56/nature";     // Default project logo. 56x56 px
        }
        project.ownerId = Meteor.userId();  // Logged in user is the initial owner
        project.sharedToId = null;          // The project is not shared to anyone yet
        project.createdAt = new Date();     // current time
        project.createdBy = Meteor.userId(); // Always the user who initially created the project
        // _id is automatically created by MongoDB

        ProjectsCollection.insert(project);
    },
    'editProject' : {
        //
    },
    'deleteProject' : {
        //
    },
    'shareProject' : {
        //
    },
    'checkProject' : {
        // Check project structure, internal consistency etc
    }
});
