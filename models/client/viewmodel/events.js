/**
 * Created by Andrew on 7/06/2015.
 */


Template.viewModel.events({

    // Close button is clicked, go back to the project with it's models list
    'click .close-button': function () {
        var projectId = this.project._id;

        Router.go("project", {_id: projectId});

        // Prevent default form action
        return false;
    }



});
