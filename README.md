# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*


### Links

- Live Site URL: [REST Countries Challenge](https://jeff343.github.io/frem-countries)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [React Router](https://reactrouter.com/en/main) - For routing


### What I learned

Going into this project I had never worked with a REST API so it was good to learn how to fetch and access the data. The challenge called for all countries to be displayed on the home page, so I fetched all data from the REST Country API on the initial render and stored it in a local state variable Countries. 

Working with external data was not much different than what I have been doing so far, but it did have its challenges. Not knowing exactly how the data was structured gave me a couple hurdles. For example, it was only after testing the details page I realized that some countries did not have certain values, like country capital. I handled this by conditionally displaying the capitals by checking if country.capitals exists. Also some of the keys of the country data were dynamic based on their values. Endpoints such as country.currency and country.languages had unique keys with names derived from their values, as well as a different amount of keys per country. In order to access these values I created a function to iterate through each key in the enpdoint to return their value, regardless of the name and quantity of keys.

The project also called for a light and dark theme so I was able to learn how to set up a global theme with Styled Components, which allowed me to alternate between themes.


### Continued development

Going forward I would like to keep working on bigger, multipage projects. I think it would be good to learn how to handle state in a larger application whether it's with React, or using a state management library such as React Redux.

### Useful resources

- [React Router useParams Video](https://www.youtube.com/watch?v=y_pr4lRoUto) - This video helped me understand how to set up dynamic routing and pass information with the useParams hook.
- [Styled Components Light/Dark Theme](https://medium.com/bigpanda-engineering/dark-theme-with-styled-components-a573dd898e2a) - This was a very good article that helped me setup up the global theme with Styled Components.


## Author

- GitHub - [Jeff343](https://github.com/jeff343)


