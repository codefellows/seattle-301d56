# Class 06: Node, npm, Express, and APIs

## Code demo from lecture is at https://github.com/mnfmnfm/puppy-api

## Overview

Today we will take a step into the back end, beginning to write a proper `server.js` file to serve API data to the City Explorer client application. You will continue to build out this file through lab 9, working with a new partner each day.

Another component of this portion of the course involves working with a static client which you have no control over. You will be able to view the source code for this client, but will not be permitted to modify it in anyway. Servers and clients are separate entities; the only relationships that exist between them are the relationships we create. This week, you will be creating those relationships.

## Agenda

- Announcements
    - 1:1s are Tuesday/Wednesday for 10 minutes each! Schedule below. Agenda:
        - How are you doing so far
        - Addressing feedback
        - Any other questions/concerns
- Feedback review
- Warm-up exercise
- Review code challenges
- Introduction of today's code challenge topic
- Code review of lab assignment
- Node, ExpressJS, and npm
- Postman
- Environment variables
- Code Demo
- Lab Preview

## Learning Objectives

As a result of completing Lecture 6 of Code 301, students will:
- Begin to understand how the world wide web works
- Be able to explain the role of the browser and the server as components of the web request-response cycle
- Understand how to initialize a NodeJS project and use NPM packages
- Understand the basics of working with ExpressJS
- Control their production and deployment environments
- Understand how to interact with a static client code base


## 1:1 Schedule

|Tuesday| |Wednesday| |
|-|-|-|-|
|9:00 AM|Stephen|9:00 AM|Saurav|
|9:10 AM|Kush|9:10 AM|Roger|
|9:20 AM|Luke|9:20 AM|Xia|
|9:30 AM|Robert|9:30 AM|John|
|9:40 AM|Vinh|9:40 AM|David|
|9:50 AM|Jhia|9:50 AM|Tim|
|10:00 AM|Williams|10:00 AM|Anthony|
|10:10 AM|Yuan|10:10 AM|Tisha|
|10:20 AM|Peter|10:20 AM|Kent|
|10:30 AM|Charles|10:30 AM|William|
|10:40 AM|Cristian|10:40 AM|Reina|
|10:50 AM|Kishor| *11:00 AM* |Doug|
| *12:00 PM* |Paolo|11:10 AM|Matt|
|12:10 PM|Jen|11:20 AM|Devon|
|12:20 PM|Liz|11:30 AM|Paula|
|12:30 PM|Jorie|11:40 AM|Sudip|
|12:40 PM|Levi|11:50 AM|Ed|
|12:50 PM|Chai|

## Feedback Review

### The Good: most helpful, appreciated
- Most people like code challenges for practicing JS skills
    - Good! We'll keep having things like this throughout 301 and 401.
- My teaching style
    - thank you! more particulars on good/bad are welcome.
- TAs in general (and Evan in particular)


### The Mixed: different people had different opinions
- Who the course would be best for
    - "I would only recommend to someone who has prior knowledge of jquery/javascript. Not to someone brand new to coding."
    - "For someone who is pursuing a full-stack, this would be okay as is. However, for my cohort, curriculum does not seem to be tailored to our roles."
- Partner Power Hour
    - Showed up in more "least helpful" than positive (about a 3:2 ratio)
    - Will be just one per week going forward

### The Bad: least helpful, most changes requested
- Required trainings from Amazon + required assignments from CodeFellows = a lot of required assignments
    - A sampling of your words:
        - "Feeling overwhelmed between Amazon and CF work."
        - "Amazon has mandatory courses, some of them quite lengthy, with deadlines for their completion"
    - What I had heard before the course: apprentices will finish Amazon onboarding tasks during the week before they arrive for Code 201. Once they're at CF, CF should be their only focus.
    - Based on feedback, that's not actually how that went/is going for y'all. We're talking with Amazon and Apprenti about that.
    - For things like meetings with mentors/managers, as long as you let us know, you'll be marked as present.
- Career coaching assignments feel irrelevant/not useful
    - Cool suggestion: refocusing on Amazon-relevant concepts, like leadership principles. I like it!
    - For the Behavioral Questions & Mock Interviews assignment, updated to be about Amazon leadership principles instead.
    - Upcoming Professional Pitch video assignment says to share with "a mentor"--good or bad to make that your official Amazon mentor?
    - RE: getting feedback on career coaching: that's coming in 401. Spreading out the work in 201/301 helps it not feel overwhelming in 401.
- Learning frontend technologies as future backend developers
    - This is the Apprenti Software Developer training, with some Amazon-requested modifications.
    - Amazon requested e.g. React to make sure you can interface with FE developers, and can be FE developers as necessary.
    - It's been FE heavy so far--that's changing starting now!
