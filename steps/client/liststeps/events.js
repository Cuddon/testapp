Template.listSteps.events({

    // Add model button is clicked
    "click .add-step": function () {
        var projectId = this.projectId;
        var modelId = this.model._id;

        //Open the selected model view/edit template
        Router.go('addStep', {projectId: projectId, modelId: modelId});

        // Prevent default form submit
        return false;
    }
});


Template.modelItem.events({

    // A step card item is clicked
    "click .step-item": function () {
        var projectId = this.projectId;
        var modelId = this.modelId;
        var stepId = this._id;

        //Open the selected project view/edit template
        Router.go('viewStep', {projectId: projectId, modelId: modelId, _id: stepId});

        // Prevent default form submit
        return false;
    },


    // Clone button is clicked
    'click .step-clone': function () {
        alert("Not implemented");

        // Prevent default form action
        //return false;
    },

// Delete button is clicked
    'click .step-delete': function () {
        var stepId = this._id;

        var conf = confirm("Please confirm.\nDo you want to delete step: " + this.name);
        if (conf === true) {
            // Add the new project to the database using a server method
            //todo: May need to create a client method stub so that the Meteor.Errors from the server method can populate to the client
            Meteor.call('deleteStep', stepId, function (error, result) {
                if (error) {
                    // Display the error to the client
                    showError(error.error, error.reason)
                } else if (result === false) {
                    showError('delete-step', "Error deleting step: " + stepId)
                }
            });
        }
    }


});
