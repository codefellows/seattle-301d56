# Lab 04: RWD Portfolio

## Overview

For today's lab assignment, you will work independently to create a personal portfolio. You will begin with the provided starter code and modify the contents to complete your feature tasks. Take time to review the provided code base and understand its structure before adding features.

## Resources

- [HTML5 UP templates](https://html5up.net/)

## Repository Set-up

- Create a new repository on GitHub named `portfolio`. Clone it to your local file system.
- Pull the starter code from your course repository's `upstream` remote.
- From the command line, copy the contents of the `starter-code` folder from the course repository into the root of your `portfolio` repository. Play around with the `cp` command until you get it exactly right. Don't worry if you don't get it right the first time, just clear out the attempt, and try again.
- Add and commit this initial state of the code base to your master branch.
- From this point on, work on semantically-named non-master branches. Remember to add, commit, and push regularly.

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

### Feature #1: Refactor the CSS 

#### Why are we implementing this feature?

- As a user, I want the portfolio to have a clean UI so that it is visually appealing.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the portfolio contents should be displayed  

#### How are we implementing it?

- Refactor the `main.css` file using SMACSS principles.
  - You may decide how many files to include, but at the minimum should include  `base.css`, `layout.css`, and `modules.css`. However, think through the way you separate your CSS rules. For example, you may want several CSS files in a `modules` folder, if you feel that the code needs to be organized in that manner.

### Feature #2: Modify the contents

#### Why are we implementing this feature?

- As a user, I want to view a unique portfolio so that the skills and personality of the developer are portrayed.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the content should be unique and reflect the skills and personality of the developer  

#### How are we implementing it?

- Modify the contents of the template to make it your own. The HTML elements may remain the same if you like, but the content should be adapted to reflect your personal details and skills.
- Apply the following changes, some of which were part of your prework for this course:
  - Next to the header image, add your name and a short, 2-3 word title.
  - In the Intro section, add a personal headline. This should be the same as or similar to your headline on your LinkedIn profile.
  - In the Portfolio section, state what you are excited about in tech. Add links to projects and include placeholders for future 301 and 401 projects. If you would like, you can add links to sites such as LinkedIn and GitHub here, or social sites.
  - In the About Me section, add your personal pitch and banner photo. 
- Add you own color scheme and Google fonts.
- Change the content and images to reflect your personal preferences. If you are using online images, make sure they are licensed for free, commercial use. For example, [Unsplash](https://unsplash.com/) has a nice variety of free images. 
- Update the list of social media icons with your links using icons for your favorite social media sites from IcoMoon or Font Awesome.
- Keep in mind that this template is just a starting point. It is yours to modify to reflect your personal online presence as a software developer so have fun and be creative!

## Submission Instructions

1. Complete your Feature Tasks for the lab
1. Create a PR back to the `master` branch of your repository, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
