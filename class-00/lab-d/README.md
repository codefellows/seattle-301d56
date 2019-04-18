# Lab 00d: Code Challenges Setup

Part of growing as a programmer is to practice, practice, practice. Throughout this course, you will complete a set of daily code challenges. Each set will contain up to ten problems.

The daily challenges will be posted by the instructor at the end of lecture every day. Plan to focus on this task with your partner every day after class until 6 p.m., completing as much as possible during this time, then complete the remainder of the challenges on your own, as needed.

Read through this entire document now so you know what to expect after class every day. Follow the set-up instructions so you are ready to tackle your first set of challenges at the end of class today.

## Working with Partners

You will be working on these code challenges with a new partner every day. This will also be your partner for the paired lab. Code challenges that are assigned when heading into the weekend should be completed independently.

After lecture, get together with your partner and read through the daily set of challenges. Read the MDN documentation for the topic(s) of the day. Your instructor will also be sharing a YouTube playlist which contains tutorials on each topic. Each video is approximately ten minutes long and you are encouraged to integrate these videos into your workflow as you and your partner see fit.

## GitHub repository

Create a new repository on GitHub named `data-structures-and-algorithms`. You will continue to expand on this repository in your 401 course. The repository should have a root `README.md` file with an overview of the purpose of the repository. 

After you clone the folder, add in `eslintrc.json` and `.gitignore` files from the course repo's `configs` directory. Then copy the `package.json` file from the `starter-code` folder into the root folder of the repository, then run this command, which will install some necessary utilities for you.

* `npm install`

Within the repository, create a folder named `code-challenges`. You will make a new git branch and add a new folder for each challenge you tackle throughout this course, and Code 401.

For example, for today's set of challenges, you will make a new branch with the command `git checkout -b for-each`. On the new branch, you will create a  folder for the set of challenges. 

Go ahead and make that branch, then a folder named `for-each` for today's set of challenges.  When you're done, you should have a directory structure like this:

```sh
data-structures-and-algorithms (repository)
├──code-challenges
│  └── for-each
├── node_modules (added during npm install)
│
├── .eslintrc.json
├── .gitignore
├── package-lock.json (added during npm install)
├── package.json
└── README.md
```

At the end of lecture each day, a new challenge will be published in Canvas. Copy the contents of the file into your repository and work on the individual problems for the day. *It's a good practice to add and commit regularly as you finish each problem in the day's challenge.*  When you are finished, push your branch to GitHub to create a PR.

Every code challenge file is divided into two sections: challenges and tests. You will need to add your own solutions to each challenge but should not modify the tests in any way. These tests will ensure that your solution is meeting the requirements of each challenge. Even though you may not modify the tests, you are encouraged to read them to see what is being evaluated.

When you finish the assignment each day, make a new pull request from your daily challenge branch to your master branch and submit the PR URL in Canvas. You can submit a link to a pull request even if the pull request is closed.

## Submission Instructions

1. To complete this set-up assignment, submit a link to your repository's master branch. It should match the folder structure given above.
1. Add a comment in your Canvas assignment which includes the following:
    - A question or observation about the lab assignment
    - How long you spent working on this assignment
