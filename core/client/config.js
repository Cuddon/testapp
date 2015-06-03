/**
 * Created by Andrew on 24/05/2015.
 */

Session.setDefault('appName', "A Meteor App");
Session.setDefault('appDescription', "My First Meteor App by Andrew Cuddon");
Session.setDefault('activity', "Home");

document.title = Session.get("appName");
