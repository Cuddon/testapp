/**
 * Created by Andrew on 30/05/2015.
 */


Template.registerHelper('appName', function () {
    return Session.get("appName");
});

Template.registerHelper('activity', function () {
    return Session.get("activity");
});


Template.registerHelper('currentRouteName', function () {
        if (Router.current().route.getName()) {
            return Router.current() && Router.current().route.getName().replace('.', '-');

        } else {
            return "home"
        }
    }
);


// ifCurrentRouteIsHome function
Template.registerHelper('ifCurrentRouteIsHome', function () {
    if (Router.current().route.getName()) {
        return ("home" === Router.current() && Router.current().route.getName().replace('.', '-'));
    } else {
        // Home page
        return true;
    }
});

