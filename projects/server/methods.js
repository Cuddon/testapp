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
    addProject: function(project) {
        if ( !this.userId ) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to add a new project.");
        }

        if (project.logo.trim() === "") {
            project.logo = "http://lorempixel.com/56/56/nature";     // Default project logo. 56x56 px
        }
        project.ownerId = this.userId;  // Logged in user is the initial owner
        project.sharedToId = null;          // The project is not shared to anyone yet
        project.createdAt = new Date();     // current time
        project.createdBy = this.userId; // Always the user who initially created the project
        // _id is automatically created by MongoDB

        ProjectsCollection.insert(project, function(error, id){
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('addProject', "Unable to add a new project. Please contact your administrator.");
            } else {
                // return the id of the newly created document
                return id;
            }
        });
    },

    updateProject : function(project) {
        // Save updates to a project
        if ( !this.userId ) {
            // Raise an error and send it to the client
            throw new Meteor.Error("logged-out", "You must be logged in to edit a new project.");
        }

        // Extract the project ID and remve the id attribute from the update object
        var projectId = project._id;
        delete project._id;

        ProjectsCollection.update({_id: projectId}, {$set: project}, function(error, docsUpdated){
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('addProject', "Unable to add a new project. Please contact your administrator.");
            } else {
                if (docsUpdated === 1) {
                    // The number of updated documents should be one
                    return true;
                } else {
                    throw new Meteor.Error("database-error", "This project appears to exist more than once.");
                }
            }
        });
    },

    deleteProject : function(projectId) {
        if (! this.userId) {
            throw new Meteor.Error("logged-out", "The user must be logged in to post a comment.", "Meteor.methods.deleteProject: " + projectId);
        }
        ProjectsCollection.remove(projectId, function(error) {
            if (error) {
                // Raise an error and send it to the client
                throw new Meteor.Error('deleteProject', "Unable to delete the project. Please contact your administrator");
            } else {
                // Success
                return true;
            }
        });
    },

    cloneProject : function() {
        //
    },

    shareProject : function() {
        //
    },

    checkProject : function() {
        // Check project structure, internal consistency etc
    }
});
