Template.addProject.events({

    // Add project form is submitted
    "submit": function (event) {
        // Insert a new document into the projects collection
        var project = {
            name: event.target.name.value,
            description: event.target.description.value,
            notes: event.target.notes.value,
            image: event.target.image.value
        };

        if (project.name === "") {
            showError("Project Name", "This field is mandatory. Please enter a project name")
            return false;
        }

        // Add the new project to the database using a server method
        Meteor.call('addProject', project, function (error) {
            if (error) {
                // Display the error to the client, and stay on the same page
                showError(error.error, error.reason);
            } else {
                // Success
                Router.go("projects");
            }
        });

        // Prevent default form submit
        return false;
    },


    // Cancel button is clicked, go back to projects list
    "click .cancel-button ": function () {
        //alert("Cancel");
        // Go back to previous screen
        //history.back();
        Router.go("projects");
        // Prevent default form action
        return false;
    },

});
