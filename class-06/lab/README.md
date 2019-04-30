# Lab 06: Node, npm, and Express

## Resources

[Node JS Docs](https://nodejs.org/en/)

[NPM JS Docs](https://docs.npmjs.com/)

[Express JS Docs](http://expressjs.com/en/4x/api.html)

[Dotenv Docs](https://www.npmjs.com/package/dotenv)

## Configuration

- `data` directory - with [geo.json](https://codefellows.github.io/code-301-guide/curriculum/class-06/lab/starter-code/data/geo.json) and [darksky.json](https://codefellows.github.io/code-301-guide/curriculum/class-06/lab/starter-code/data/darksky.json)
- `.env` - with your PORT. Make sure this file is in your `.gitignore`.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: `express`, `cors`, and `dotenv`.
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.


```sh
lab-06-repository
   ├── data
   |     ├── darksky.json
   |     └── geo.json
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
```

## User Acceptance Tests

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

### Overview

In labs 6 through 9, you will be building a stand-alone back end which will interact with a static front end. Working with a new partner each day, you will request data from a total of six third-party APIs, modify the data as needed, and send the data to the client to be displayed in the browser. In labs 8 and 9, you will be persisting data in a SQL database.

Every day, you and your new partner(s) will deploy your back end as a new instance on Heroku.

You will have access to view the code base for the client, but will not be able to modify it in any way.

For this lab assignment, you will convert a location entered by the user into a latitude and longitude, then use those values to request weather information for that location. As your City Explorer back end progresses in labs 6 through 9, you will use the latitude and longitude to request information from other APIs from the same search query.

### Workflow
- We will be using the [Trello](https://trello.com/home){:target="_blank"} project management tool for the duration of this project.
- To maximize your experience with Trello, you should create a free Trello account by clicking on the `Sign Up` button.
- After creating an account, go to the [City Explorer Trello Board](https://trello.com/b/ZmD87LCC){:target="_blank"}, open the "... Show Menu" link, click the "... More" link, and then click "Copy Board". Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- This Trello board contains all of the features required to complete this lab assignment.
- Also on the Settings tab, click the "Filter" link to view just the current day
- With your partner, review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- During the day with your partner, check off tasks as you complete them, and move the story cards through the workflow.

### Repository set-up

- One person from your group should create a new repository on GitHub called `lab-06-back-end`. Add your partner(s) as collaborator(s).
- From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, make a PR to master and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Heroku deployment

- One person from your group should create an instance on Heroku. Refer to lecture 5 for a reminder of the steps, if needed.
- In the Deploy tab, connect your instance to your repository and enable automatic deploys from your master branch. Deploy your application and make sure there are no errors.

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
