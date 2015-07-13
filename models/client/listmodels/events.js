/**
 * Created by Andrew on 8/06/2015.
 */


Template.modelItem.events({

    // Add model button is clicked
    "click .add-model": function () {
        var projectId = this.project._id;

        //Open the selected model view/edit template
        Router.go('addmodel', {projectId: projectId});

        // Prevent default form submit
        return false;
    },

    // A model card item is clicked
    "click .model-item": function () {
        var modelId = this._id;
        var projectId = this.projectId;

        //Open the selected project view/edit template
        Router.go('model', {projectId: projectId, _id: modelId});

        // Prevent default form submit
        return false;
    },


    // Clone button is clicked
    'click .model-clone': function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

// Delete button is clicked
    'click .model-delete': function () {
        var modelId = this._id;

        var conf = confirm("Please confirm.\nDo you want to delete model: " + this.name);
        if (conf === true) {
            // Add the new project to the database using a server method
            //todo: May need to create a client method stub so that the Meteor.Errors from the server method can populate to the client
            Meteor.call('deleteModel', modelId, function (error, result) {
                if (error) {
                    // Display the error to the client
                    showError(error.error, error.reason)
                } else if (result === false) {
                    showError('delete-model', "Error deleting model: " + modelId)
                }
            });
        }
    }


});
