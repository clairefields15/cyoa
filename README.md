# Choose Your Own Adventure (CYOA)

## Introduction

Welcome, adventurer! Are you ready for a change?

CYOA is an app for adventurous people who are ready to move to a different city but want a little help from the Magic 8 Ball in deciding.
Despite the magic 8 ball outcome, you must decide whether to like/dislike the city before you see another random choice (think Tinder for cities!). Liked cities are saved to favorites, if it's a "Nope", you won’t see it again.

This application was built mobile-first and the best experience will be on mobile. However, it is fully responsive across multiple breakpoints.

[Check out the deployed site](https://cyoadventure.netlify.app/)

[Project spec](https://frontend.turing.edu/projects/module-3/niche-audience.html)

## Overview of the app

When you first visit CYOA you see a random city, a summary, and some quality of life metrics (to help you decide).

![first view](https://user-images.githubusercontent.com/79113236/128793680-c3832709-1dd0-42b1-ba58-88d8c689ccf2.gif)

Then you ask the Magic 8 ball -- should I move there?

![magic 8 ball](https://user-images.githubusercontent.com/79113236/128793747-12308106-b507-490e-b4be-98f4277c6377.gif)

Regardless of what the Magic 8 Ball says, you decide whether you like the city or not! Get to clicking!

![like dislike favorites](https://user-images.githubusercontent.com/79113236/128793814-c7a5808b-c424-439e-a274-64d5b3a8464d.gif)

From the favorites page, you can view details again (perhaps remind yourself what you liked about the city in the first place). Don't like it anymore ? Break up with it. We don't care.

![details and dislike](https://user-images.githubusercontent.com/79113236/128793847-06ffb74a-189d-41a6-954f-2ae5ab5091dd.gif)

## Evolution of the Project/Reflections

## Future Features

In future, I hope to add localStorage to the application so that favorites persist upon refresh and you truly will never see disliked cities again. When I add localStorage, I will also add a button on the favorites page that will allow users to clear their local data and get a fresh start. If users have cycled through all 200-something cities in the API, a message will appear letting them know that there aren't any more options and directing them to the favorites page so they can get that fresh start on their search.

I would also like to refactor my css to use Styled Components and add lazy loading to improve the UI/UX.

Since the app is best experienced on mobile, I would also like to turn it into a PWA and add swipe left/right functionality to the main page.

## Setup

1. Clone down this repo.
2. cd into the directory.
3. Then run: `npm install`
4. Run `npm start`.
5. Visit http://localhost:3000/ (or whatever URL you are directed to in your terminal)
6. Enter `control + c` in your terminal to stop the server(s) at any time.

## Technologies Used

- React
- React Router
- PropTypes
- Chart.js
- Continuous Deployment with Netlify
- End to End testing with Cypress
- Integration with the [Teleport API](https://developers.teleport.org/api/) and [Magic 8 Ball API](https://8ball.delegator.com/)

## Contributors

Claire Fields

Ashton Huxtable (Code reviewer)

Ashley O'Brien (Code reviewer)

Scott Ertmer (Project Manager)

Kayla Gordon (Project Manager)
