# Big Tomato Case Study - Final Assessment

Great work team! Farmer Toma Toe is very pleased with the MVP of his website. He thinks after a few more features he can deploy the site to his domain www.getsauced.farm. Toma’s daughter, Cherry, is addicted to FarmBook (the agriculture industry’s version of Facebook) and browses their FarmFeed (appropriately nicknamed “The Fertilizer”) all day long. After watching Cherry scroll through her feed, Toma realizes that the next feature he needs for his site is an announcements feed and he would like to name the feed, "The Vine".

The EY Developers have discussed the requirements with Toma at length. They have provided the following requirements and user stories for the announcements feed.

Note: If you completed the Big Tomato Case Study Intermediate Assessment - you will not be using that code repository. We have provided a blank slate for you.

## Pre-requisites:

* Register for a github account (if you do not already have one)
* Install Dependencies
* [Git tools](http://msysgit.github.io/)
* [Node JS](https://nodejs.org/en/)

## Setting Up Local Repository

* Login to Github. 
* In Github click the New Repository button. Name your repository "surname-final-assessment-day1".
* Set your repository to Public and do not initialize with a readme.
* Click Create Repository.
* Copy the repository URL.
* Using the command line, navigate to a directory on your machine where you would like to save your repository.
* Run `git clone REPOSITORY_URL`. 
* Navigate to the [repo](https://github.com/eydevsupport/final-assessment-student-day1) for the final assessment.
* Copy the repository URL.
* Using the command line, navigate to a directory on your machine where you would like to save this repository. It should not be inside the directory you just created - ideally it would be at the same level as that directory. 
* Run `git clone REPOSITORY_URL`. Using Windows Explorer or the command line, copy and paste all of the contents of this repository into your repository labeled "surname-final-assessment". If you see a folder labeled ".git" do not copy or paste this folder. Also, do not copy the folder labeled "final-assessment-student-day1", ONLY the contents. 
* Now that you have copied the contents it's time to push them up to your remote repository.
* Using the command line, navigate to your "surname-final-assesment-day1" directory. 
* Using the command line, run `git add .` then hit enter. Then run `git commit -m "initial commit"`. Then run `git push`. Now your github repo is ready to go and it's time to install the required dependencies.
* Run the command `npm install`
  * If running this command alters the .package.json file and the .json file, use the `git checkout` command to discard those changes. Running `git status` will give you instructions on how to use `git checkout`.
* When you are ready to run the site locally, run the commands:
  * `npm run api`
  * `npm run dev`

Note: You will need to run these commands in separate command line windows. The command `npm run dev` runs a local server on your machine that hosts the site. The command `npm run api` runs a mock api that hosts all of the data for the assessment.

You are now ready to start working on the site. The site is set up with LiveReload. This means that when you save your code in your text editor, the page will automatically reload for you. We have noticed that there are a few instances where the LiveReload can lag, so if you are not seeing your changes immediately, give it a few seconds to catch up.

## Requirements:

### General

* Use git branching (i.e., do not push code to master).
* Write all angular code (AngularJS 1.x) consistent with the [John Papa Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).
* DO NOT USE ES6 or later.
* Stick to the requirements, however, if you feel that there are other opportunities to improve the code or create new features feel free to do so.
* Remember, styling is important! This is going directly to a client. Feel free to add all custom styles to the main.css file.
* Your application should be mobile friendly.
* The application requires you to use Toma's Tomato Farm API. The API allows you to retrieve Tomato and Farm information.
  * The API has the following endpoints:
    * `http://localhost:3000/announcements` - Get All Announcements
    * `http://localhost:3000/owners` - Get All Announcement Owners
* We have created the basic file structure for your new code. Use this as guidance but feel free to change/add/remove additional files where you see fit. 
* In certain files we have indicated where to add your code. Use this as guidance but it does not indicate every section you may need to add code. Additionally, you need to add code to every section indicated if you do not see fit. 

## Part I

In Part I of the final assessment you will begin creating an announcements feed based on the user stories below. As you create your announcements feed, please also adhere to the following code requirements:
* You must create the announcements feed with AT LEAST one custom directive.
* You must create the announcements feed with AT LEAST one custom service.
* You will have to use the restService to get Announcement Data and Announcement Owner Data.
  * Request the data on the tomato-announcements-home page and pass the data into your announcement-feed directive(s).

Refer to User Stories for the specific requirements. 

#### User Stories

* As a user, when I am on the home page, I want to view a link in the top navigation on the right side, for the announcements page.
* As a user, I want to click on the "Announcements" link and navigate to a new page.
* As a user, I want to view the announcements feed in a tomato card (shared-component) that is centered in the browser but does not take up the entire width of the screen (think facebook feed).
* As a user, I want to be able to scroll down the feed to view additional announcements (i.e., the feed should have a scrollbar, not the page).
* As a user, I want to view each of the following fields in an announcement: Title, Date, Type, Created By (Owner).
  * The OwnerID is provided to you in the Announcements Data and the Owner information is provided in the Announcements Owner Data. 