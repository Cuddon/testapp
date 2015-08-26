
//UserDataCollection = new Mongo.Collection("userData");

// Subscribe to the userData record set
// based on the built in Meteor.users collection so no need to declare that collection
// Additional user data from the user's record
Meteor.subscribe("userData");


//TODO: DO we need both of these??
