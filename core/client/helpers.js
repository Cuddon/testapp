/**
 * Created by Andrew on 30/05/2015.
 */


Template.registerHelper('appName', function(){
    return Session.get("appName");
});

Template.registerHelper('activity', function(){
    return Session.get("activity");
});
