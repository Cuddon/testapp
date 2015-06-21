/**
 * Created by Andrew on 30/05/2015.
 */

Template.addProject.helpers({
    nameMaxLength: function () {
        return clientSettings.projects.nameMaxLength;
    },
    descriptionMaxLength: function () {
        return clientSettings.projects.descriptionMaxLength;
    }
});
