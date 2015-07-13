/**
 * Created by Andrew on 30/05/2015.
 */

Template.home.events({
    "click .about": function () {
        Router.go("/about");

        // Prevent default form action
        return false;
    }
});

// This does not currently work due to the Bootstrap data-dismiss="alert" in the html
Template.errors.events({

    // Dismiss an error message
    "click a .dismiss-error": function () {

        var errorId = this._id;
        alert('Selected error: ' + errorId);

        // Remove the error for the list when you dismiss it
        deleteErrorMessage(errorId);
        // default continue with the default action of clicking the dismiss button
        return true;
    }

});