# Contributing
## Meeting Schedule and Link
Zoom link: https://nyu.zoom.us/j/93978452728  
Times: M - 6:30 pm, W - 4:50 pm, Sa - 11 am

## How to run locally
Request a .env file, place the .env file in the back-end directory. Then from the main directory, run the npm start script
```bash
npm run start
```
The app should now be hosted locally on port 3001. Access it at localhost:3001

## How to Use
To use Meet Me, enter in at least two starting locations, select any filter you want, and click search. Meet me will calculate the center point of the entered locations and return results nearby. If you wish to save groups or commonly used locations, you can do so after creating an account. You don't need an account to access Meet Me's basic functionality.

When searching, rememeber you are only require to provide input for the query box. So, you are not required to provide input for any of the dropdown filters. 

Example searches include:

1) ‘restaurant’ alone in the query box. 
2)  ‘sports bar’ alone in the query box.
3) ‘chinese’ in the query box with ‘restaurant’ as the type.

Depending on your starting locations, you can try adding additional filters. However, if there are no matching results in your location, none will be returned## How to start contributing
We will assign/claim tasks from our To Do at daily standups as needed, then push those changes to the repo as they are completed.

## Who
Alex Hammer, Ari Joseph Khaytser, Luis Cordova, Maggie Pierce, and Santiago Darré

### Team Norms
We hope to foster a supportive and confortable team environment through offering each other help and support as needed. We will be kind to each other and understanding of each other's shortcomings. We will encourage each other to put forward our best work through offering constructive critism.

### Team Values
Efficiency, kindness, 

### How We Work 
If we have disagreements, we will discuss and put them to a vote. If we have issues we feel cannot be mediated within the team, we will take them to the professor and TAs. 

Our definition of done is that a user story as been peer-reviewed, passed automated tests, and been merged into the project.

When a member is failing to deliver on their obligations to the team we will request they change their working habits. If they fail to do so, we will bring the issue to the professor.
  
Team members are expected to respond to messages directed at them within 24 hours on week days.
  
Rules for prioritizing the Product Backlog?  We will prioritze the product backlog from most essential for the app's functioning to least essential as determined by the sprint's product manager.
 
## Git workflow
Each member will create working branches for their tasks. When a task has been assigned, it should move into the To Do column. When a programmer begins a task, it should be moved into the In Progress column. Once a task is completed on the working branch (meaning the programmer has run initial tests on their branch), the change will be merged to the development branch and moved into the Awaiting column. Then, the task will be peer-reviewed and unit tested. Once the changes are deemed acceptable, we will merge the change into the master branch and move the task to Done.
