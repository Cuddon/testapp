/**
 * Created by Andrew on 30/05/2015.
 */

Template.topnav.helpers({
  appName: function(){
    return Session.get("appName");
  },
  activity: function(){
    return Session.get('activity');
  }
});

