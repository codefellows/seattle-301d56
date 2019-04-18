# Lab 00c: Intro to SMACSS

Make sure you have read the SMACSS documentation before working on this assignment. The documentation and guidelines below are open to interpretation, rather than hard and fast guidelines that must be adhered to. Be careful not to spend a lot of time debating the exact correct file for a specific selector; rather, organize your selectors in a way that is meaningful to your project and will make it easier to find and modify those selectors in the future.

## General Guidelines:

- Styling should progress from broadest to most specific
- **base.css** should contain any general styling on top of what is provided by a reset.css or normalize.css file (these files will be discussed in further detail in lecture)
  - Apply to elements such as body and main
  - Examples include styling of overall font and background color
- **layout.css** should contain general positioning on the page
  - Apply to elements such as header, footer, nav, aside
  - Classes and IDs can be included here
- **modules.css** should contain smaller components on the page
  - Apply to elements such as list items, individual images, specific paragraphs
  - Classes and descendant selectors should primarily be included here
- **state.css** should contain any styling that changes upon user interaction or state change
  - Apply to hover state, before or after clicking on a link, focus and blur effects
  - Pseudo-classes and pseudo-elements should be included here
- **theme.css** should contain small changes on top of all other normal styling
  - Applying temporary changes, such as a holiday theme

## Instructions

Plan to spend about 5 minutes reading through this document before getting started on the code.

After that, follow the instructions below to fork and clone your class repository, and then spend about 45 minutes working in the starter code.

1. Complete the work in a local clone of your fork of the class repo.
1. Work on your fork on a non-master branch. As you work, remember to add, commit, and push regularly.
1. Start by reading through the HTML and CSS files to see how they are interconnected.
1. Create the following files: base.css, layout.css, and modules.css, and link them into the HTML file. For this code base, you will not need state.css or theme.css files.
1. Following SMACSS conventions, move the individual CSS rules from style.css into the appropriate new CSS file. Feel free to refactor and optimize the individual CSS rules and HTML file as needed as you go through this process.
1. As you work, verify the styling is maintained in the browser.
1. When everything has been removed from style.css, delete the file, and delete the link from the HTML file.

## Submission Instructions

1. When finished, push your branch back to your fork on GitHub, and merge it into master. 
1. Submit a link to your PR. You can link to a pull request even if the pull request is already merged or closed.
1. Add a comment in your Canvas assignment which includes the following:
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
