# Things To Do

## Build
1. Change names of project fields from e.g. 'name' to 'projectname' so they can coexist on templates with models and steps
2. Create a texteditor config file to say 4 space indents
3. rename icon/logo fields consistently to img
3. Messages from the system and marketing messages
4. Administrator console
5. Check a project's integrity
6. Run a model
7. Log all user actions (probably via the function that check a user's permissions to see/do something
8. Optional v mandatory fields


## Accounts
1. Account sign up ad email verification
Log out when browser session finishes
Fee payment. one off and regular, with reminders when it fails

## Support
Emails for support and contact
Forum (use Slack and/or Periscope or ....)
How to videos (30 seconds each)
FAQ
Why this? What it isn't
Help

## Model Types (or are these step types
Extract
Validate
Cleanse
Transform
Load
Reconcile
Audit
Explore
Summarise

## Sharing
* Share entire projects to other users
* Share models between projects by linking them using a LINK STEP type (e.g. an import and validation model can be used by several other models)


## Community
Blog

## Legals
1. Privacy statement
2. Licence and usage, including disclaimers



# Permissions:


## Permissions:

  projects: create, read, update, delete, run
  models:   create, read, update, delete, run
  steps:    create, read, update, delete, run
  menus:    read
  


## Roles:
  Creator:  Creator and original owner
  Owner:    Current owner
  sharedTo: Someone else who have been giver permission to read, update, delete or run someone else's project or model


## Account Types

Account Types (applies to a single user):
  Level 100:    Service:    Foundation: (free) Limited access (likely to be free for PoC purposes)
  Level 110:    Service:    No limits: (paid), No limits components and records/fields
  Level 120:    Service     The Lot: (paid), All features

  Level 200:    Service:    Team licence (licence administrator)
  Level 210     Service:    Team Licence (user)
  
  Level 1000:  Licenced install: No limits (licence administrator)
  Level 1010:  Licenced install: No limits (user)
  Level 1020:  Licenced install: Premium (licence administrator)
  Level 1010:  Licenced install: Premium (user)
    
  Level xyz:  Special promotion etc
  
  Fees (USD)
                            Per Month       Per Year
  Service   Foundation      Nil             N/A
  Service   No Limits       $100            $500
  Service   The Lot         $
  
  Licence   Foundation
  Licence   No Limits
  Licence   The Lot
  
  Consulting Foundation
  Consulting No Limits
  Consulting The Lot
  
  
  accountTypes = [
    { level: 0
      accountTypeName: "Foundation",
      description:      "Constrained access - default and initial acccount type upon registration", 
      feeType:          "free|service|licenced install"          
      "free|service per month, service per year, licence per year",
      feeRate:
      promotion:        "None",
      cansee:         ['home', 'account', 'project', 'model', 'help'],
      cando:          ['cancel', 'edit', 'save']
      limits:           {
        components: 20,    // Max of 20 projects, models, and steps (combined) but in any combination
        rows:       50,
        fields:     10
      }
  
  ]
  