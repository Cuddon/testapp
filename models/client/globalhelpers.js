/**
 *  Helper functions for addProject template
 */

Template.registerHelper('modelNameMaxLength', function(){
    return clientSettings.models.nameMaxLength;
});


Template.registerHelper('modelDescriptionMaxLength', function(){
    return clientSettings.models.descriptionMaxLength;
});


