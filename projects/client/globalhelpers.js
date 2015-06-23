/**
 *  Helper functions for addProject template
 */

Template.registerHelper('projectNameMaxLength', function(){
    return clientSettings.projects.nameMaxLength;
});


Template.registerHelper('projectDescriptionMaxLength', function(){
    return clientSettings.projects.descriptionMaxLength;
});


