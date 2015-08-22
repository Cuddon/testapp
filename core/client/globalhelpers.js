/**
 * Created by Andrew on 30/05/2015.
 */


Template.registerHelper('appName', function(){
    return Session.get("appName");
});

Template.registerHelper('activity', function(){
    return Session.get("activity");
});




Template.registerHelper('currentTemplate', function(){
        return Router.current() && Router.current().route.getName().replace('.','-');
    }
);


// ifCurrentRouteIs function

Template.registerHelper('ifCurrentRouteIs', function(v1) {
        return (v1 === Router.current() && Router.current().route.getName().replace('.','-'));
    }
);
