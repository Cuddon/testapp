/**
 * Routes: View/Edit a model
 */

// View/edit a single model
Router.route('/project/:projectId/model/:_id', {
    name: 'model',

    subscriptions: function () {
        // This limits what the client can see (what is synced to the minimongo on the client)
        var projectId = this.params.projectId;
        return [
            // All project for this user (owned or sharedTo)
            // All models for the selected project
            Meteor.subscribe("projects"),
            Meteor.subscribe('models', projectId)
        ]
    },

    data: function () {
        // Set the data context for the template (client reads from the local minimongo DB)
        // Return the selected model and the name and id of the project it belongs to
        var projectId = this.params.projectId;
        var modelId = this.params._id;
        return {
            project: ProjectsCollection.findOne({_id: projectId}, {fields: {_id: 1, name: 1}}),
            model: ModelsCollection.findOne({_id: modelId})
        }
    },

    action: function () {
        // Render the template into the content area
        if (Meteor.userId()) {
            this.render('viewEditModel', {to: 'content'});
            Session.set('activity', "View/Edit model");
        } else {
            alert("You must be logged in to add a new model");
            this.render('Home', {to: 'content'});
            Session.set('activity', "Home");
        }
    }
});


