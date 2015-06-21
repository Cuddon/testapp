# Projects

*A project is used to group related models*

## Requirements

1. Any user may create a new project.
2. The user who creates a project is the project owner (can be reassigned by an administrator).
3. A user may nominate a project logo (link to an online image) or select from a list of existing images.
4. If no image is selected, then a default image is used.
5. A project (including its models and their steps) can be shared to another user (Account restrictions apply).
6. A user may upload project documentation (Account restrictions apply)

## User Interface
* Create a new project
* Edit a project
* Delete a project
* Clone a project
* Share a project (and its models/steps)
* Add a model to a project
* Select a model to view/edit



## Document Collections
ProjectsCollection = new Mongo.Collection("projects");

### Collection Structure

| Field | Description       | Type   | Length   | Comment             |
----- | ----------------- | ------ | -------- | ------------------- |
\_id   | Unique Identifier | String | 17 Chars | Assigned by MongoDB 
name  | Project name      | String | xx chars | |
description | Project short description | String | xx chars | |
comments | Long comment | String | xx chars | |
image | Project Logo/Icon/Image | String | xx chars | local or remote url for an image, Max 100 x 100 px |
ownerId | \_id of the current Project owner | String | 17 chars | Initially set to userID. Ownership can be change through Admin |
sharedToId | userIds for | List of strings | 17 chars | Projects can be shared to other users |
createdAt | Date/Time project was created | date | | |
createdBy \ userID of the original creator | String | 17 chars | Does not change |
updatedAt | Date/Time project was last updated/edited | date | | Excludes any models or step updates|
updatedBy \ userID of the last updater | String | 17 chars |  |


### Server Publications

Publish all projects owned by the user or shared to them by another user

Meteor publish

* projects
    * where
        * ownerId or sharedToId equals the current user ID
    * fields
        * all fields except
            * createdAt
            * createdBy
            * updatedAt
            * updatedBy
            * sharedToId


### Client Subscriptions



## Server Methods

## Client Method Stubs

## Server Functions


## Client functions
