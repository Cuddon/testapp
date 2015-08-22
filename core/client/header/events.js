/**
 * Created by Andrew on 30/05/2015.
 */

Template.header.events({
    "click .home-button": function () {
        Router.go("/");

        // Prevent default form action
        return false;
    },

    // Cancel button is clicked, go back to home page
    "click .back-button": function () {

        if (Router.current().route.getName() === 'projects') {
            Router.go("/");
        } else {
            // Otherwise just go back to the last page
            history.back();
        }

        // Prevent default form action
        return false;
    }

});

