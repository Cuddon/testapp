/*
 Core
 */


Meteor.startup(function () {
    // Anything we need to do in the client before much else happens
    if (Meteor.isClient) {
        // client startup code
        //showError("Error 1", "Here is the reason for error 1.");
        //showError("Error 2", "With a longer description than the first one.");

        // For Materialize sidebar Nav
        // TODO: Check that we really need this
        /*
        $(".button-collapse").sideNav();
        $('.tooltipped').tooltip({delay: 50});

        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false // Displays dropdown below the button
            }
        );
*/
    }

    if (Meteor.isServer) {
        // Server startup code
    }
});






