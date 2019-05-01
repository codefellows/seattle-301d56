# Lab 07: APIs

## Resources

[Superagent Docs](https://visionmedia.github.io/superagent/)

[Google Maps and Geocoding API Docs](https://cloud.google.com/maps-platform/){:target="_blank"} - Click on the Get Started button and select both the 'Maps' and 'Places' options and create a placeholder app with a name like "Lab 6".

[Dark Sky API Docs](https://darksky.net/dev/docs)

[EventBrite API Docs](https://www.eventbrite.com/platform/api)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-07-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
```

## User Acceptance Tests

### Overview

For this lab assignment, you will use latitude and longitude data from the Google Geocoding API to request localized information from the DarkSky weather API and the Eventbrite API.

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Repository set-up

- One person from your group should create a new repository on GitHub called `lab-07-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Select one person's lab 6 code to use for today's lab. The person whose code is selected should copy their lab 6 solution into the lab 7 repository. From the command line, use the `cp` command to copy the `server.js` file and your `README.md` file. Initialize your project with Node and install the necessary packages; confirm in your `package.json` file. Add, commit, and push to your master branch.

### Code Review

- From this point on, work on semantically-named non-master branches. 
- The student whose lab 6 solution code was not selected should now be the driver. With your partner, identify three improvements. This should either be pieces of code that can be refactored or three sections of the code base to add verbose comments to. Note: you do not need to select one or the other. For example, you may select one section to comment on and two pieces of code that can be refactored, for a total of three improvements.
- Work on one improvement at a time, making sure to add, commit, and push the changes as each improvement is complete. These will serve as the first three commits which your TA will review during grading, so pay attention to your Git/GitHub workflow. Once all three improvements are complete, create and merge a pull request to your master branch.

### Heroku Deployment

- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as lab 6. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 7.
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. Update your `README.md` file to reflect the changes you are making as you work through the feature tasks today.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

1. Complete your Feature Tasks for the lab
1. Create a PR back to the `master` branch of your repository, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
