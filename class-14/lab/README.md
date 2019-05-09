# ![cf](http://i.imgur.com/7v5ASc8.png) City Explorer - Part 3

## Configuration

_Your repository must include the following config files:_
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `react` and `react-dom`
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
city_explorer_react (repository)
├──public
│  └── index.html
├──src
│   └── index.js
│   └── components
│       └── app.js
│       └── header.js
│       └── search-form.js
│       └── search-results.js
│       └── result.js (exports each result component - ie: <Yelp>, <MovieDB> or each component may named/exported as its own file)
│       └── map.js
│   └── scss
│       └── _base.scss (contains single element and/or base application styles)
│       └── _vars.scss (contains global variables for use across your application)
│       └── _layout.scss (contains structural layout styles)
│       └── _module.scss (contains individual feature styles)
│       └── core.scss (contains all imported partials and is used to compile down into the final css stylesheet)
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## Resources
- [City Explorer Deployed Backend](https://city-explorer-backend.herokuapp.com)


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

## Requirements
It's time to finish City Explorer!  Your core focus today is to complete any remaining tasks from your previous lab assignments.  Get your functionality working and solid!

It's also time to style your application to meet the general look and feel of City Explorer.  You may use the City Explorer Frontend code found in the root of your course repository *or* you may design and style this up on your own.  If you choose to style it up your own, do your best to make things look consistent and clean - it doesn't have to be perfect.

Your main focus of this lab is to practice writing `.scss` and to leverage the useful tools that it provides.  At minimum, you must have the `.scss` files listed above in the configuration section but you may also expand/build upon that if you'd like.  For example, you may choose to further modularize your `_module.scss` partial into a `module` directory that subsequently contains feature based files, like `_seach-form.scss`, `_results.scss`, etc.

## Stretch Goal!
Using `<BrowserRouter>`, create a series of navigation links at the top of your site that display the name of each of your integrated 3rd party APIs (Yelp, DarkSky, MovieDB, etc).  Upon click of these navigation links, the URL route should update accordingly (ie: `/yelp`) and the main page content should only display the data coming from that API, using whatever location you'd like to pipe into it.  You may expand on this and make the location data dynamic but you'll need to ask the user for their geocode information before doing so!
