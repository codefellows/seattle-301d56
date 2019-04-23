# Lab 01: SMACSS and Responsive Web Design

## Overview

In lab today, you will be building a single responsive webpage based off of the provided design comp assets.  These contain images of what you are striving to build in HTML and CSS, so be sure to open them up and keep them handy, but note that they are not for actual use on the page. You can also print out these comps and use them to mark up and sketch out page structure.

Your document must be designed in a ***mobile-first*** approach and must be responsive when the screen size changes and the page is refreshed. The details of the media query specifications are up to you, but your breakpoint must be at 768 pixels.

This is an independent project, but your are free to collaborate with your classmates.

## Resources

- [SMACSS Official Documentation](http://smacss.com/)
- [Desktop wireframe](./comps/desktop-view.png)
- [Mobile wireframe](./comps/mobile-view.png)

## Feature Tasks

- Create a new repository named `lab-01`.
- Work on a non-master branch.
- Use good HTML structure to scaffold this site, using semantic elements where possible.
- Container elements (a box outside of your content box that might contain multiple content boxes) are very useful in managing layout. You will need to think about the relationship between parent and child / descendant elements as well as the order in which you place them in the HTML. Be thoughtful about your layout strategy.
- Add a `reset.css` file to your project, like [this one.](https://meyerweb.com/eric/tools/css/reset/)
- Use SMACSS-style modularity to organize your CSS.
- Style the page using float-based layout to reflect the comp images provided as closely as possible. The only text you should have in each box is the identifying letter, which should be centered horizontally and vertically.
- For the desktop view, the content should be inside of a channel that is a maximum of 960 pixels wide and is centered on wider screen sizes.
- Each box should have a unique background color in mobile view and in desktop view. We are not working with jQuery events yet, so these changes should be observed when the screen size changes and the page is refreshed.

## Stretch Goal

- Create an additional breakpoint for a new set of colors when the page is viewed on a tablet.
- Use jQuery to change the color of each box based on the screen size.

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR
