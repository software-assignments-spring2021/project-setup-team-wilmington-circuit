# MeetMe

[![Node.js CI](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/node.js.yml/badge.svg)](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/node.js.yml)

[Check out the project](http://meetme-agiledev.site/)

## What and Why?
MeetMe allows users to find places such as bars, restaurants and parks equidistant from a set of starting points. The project will help groups plan their destinations so that each party has roughly equal travel time and can arrive at around the same time. 

## For Whom?
MeetMe will be useful for planning meetings with friends, family, acquaintances, and business partners. 

## How?
MeetMe will use an algorithm to find places such as restaurants, bars, parks, etc. that are roughly equidistant from a set of given origin points. The list of results will display as markers on a map, which users can then select. 

## Product Vision Statement. 
MeetMe will allow users to enter a set of origin points, and search for places in between those points. Once a user selects a result from the list, it will show information about that destination, as well direction data from each origin to the destination. 

Additionally, MeetMe will allow users to save groups of origin points so that they can reuse them later. We will also allow for multiple users to interface with the same map at the same time. This is initiated by one user sharing a 'share link' with others. Any change to origin points or route setting will then be visible to all users on the share link.

We also will provide users the ability to create an account for MeetMe. While this is optional, it will allow users to transfer their saved location groups between devices, and will allow them to store commonly used locations (such as home, workplace, etc.) in their account. They will also be able to save other MeetMe users' accounts as a 'friend', so that they can quickly add them as an origin point.

## Minimum Viable Product
At minimum, our product must allow users to enter up to 6 origin points and find results that are near the midpoint (by travel-time or distance) from those points. Additionally, we must create an intuitive solution for sharing maps between users.

Also, our MVP should have:
- Select custom options, such as travel mode, for each user. 
- Save sets of origin point (locally for non-users, in database for users)
- Link sharing functionality
- Filter results by rating (GMaps), price, open hours

## Members
- [Santiage Darré](https://github.com/sdarre) (Sprint 1 Product Owner, Sprint 3 Scrum Master)
- [Ari Khaytser](https://github.com/ajk745) (Sprint 2 Scrum Master, Sprint 3 Product Owner)
- [Maggie Pierce](https://github.com/m-ggie) (Sprint 2.5 Product Owner, Sprint 4 Scrum Master)
- [Alex Hammer](https://github.com/ah4597) (Sprint 2, 4 Product Owner)
- [Luis Cordova](https://github.com/LGCX) (Sprint 1, 2.5  Scrum Master)

## History
Finding a "fair" place to meet has long been a source of unnessessary dispute. This project aims to solve this with a fair and optimal solution. 

## Contributing
Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

## Testing Instructions
Run the test scripts in the back-end folder

## Links
This project will make use of the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) developed by Google. It will also use [Turf.js](https://turfjs.org/) for geospatial analysis and finding optimal locations.
