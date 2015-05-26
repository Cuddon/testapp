/**
 * Created by Andrew on 26/05/2015.
 */


Meteor.publish('project', function(){
  return Projects.findOne({
    id: this._id
  });

});


/*
 Add
 createdBy:  this.userId

to also limit the recordset to records created by the current user
 */