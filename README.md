# CS103A CPA02 Web App Demo

This web allows you to browse through all of the NBA players' information and their NBA 2k's ratings. You can even save your favourite players and compare them if you wish. 

Here is the web link of this CPA: https://nba-rating-search.herokuapp.com/

Here is the what the main page looks like:
![The Main Page](/screenshots/main_page.png)

## Nav Bar

The nav bars can redirect you to the search page, or it can redirect you to the popular teams in the western and the eastern conference, or it can redirect you to the players collections you created.

Here is the what the nav bar with the most pupular western coniference teams would look like:
![The Nav Bar](/screenshots/nav_bar.png)

## Search Page

This web allows users to search players based on the name, ratings, and teams.
![The Search Page](/screenshots/search_page.png)

## Player Profile

You can click into players' profile with their personal information and their draft information. Also, you can add the player into your players collection.
![The Player Profile Page](/screenshots/player_profile.png)

## Players Collection

You can view your favourite players in flexboxes. Also, you can remove your favourite players from the collection.
![The Players Collection](/screenshots/players_collection.png)

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder.

Make sure you replace the MongoDB URL, the secret key, and the PORT number before you start using this app.

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```