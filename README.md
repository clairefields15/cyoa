# Choose Your Own Adventure (CYOA)

## Introduction

Welcome, adventurer! Are you ready for a change?

CYOA is an app for adventurous people who are ready to move to a different city but want a little help from the Magic 8 Ball in deciding.
Despite the magic 8 ball outcome, you must decide whether to like/dislike the city before you see another random choice (think Tinder for cities!). Liked cities are saved to favorites, if it's a "Nope", you won’t see it again.

This application was built mobile-first and the best experience will be on mobile. However, it is fully responsive across multiple breakpoints.

[Check out the deployed site](https://cyoadventure.netlify.app/)

This project was built as a final solo project for Mod 3 of the Front End Engineering program at the Turing School of Software and Design. The project spec can be found [here](https://frontend.turing.edu/projects/module-3/niche-audience.html).

## Overview of the app

When you first visit CYOA you see a random city, a summary, and some quality of life metrics (to help you decide).

![first view of the app, random city image, summary, chart of quality of life metrics, and a magic 8 ball, tap bar with "like and dislike" is visible](https://user-images.githubusercontent.com/79113236/128794421-45715150-43d8-4df8-affc-f28275819608.gif)

Then you ask the Magic 8 ball -- should I move there?

![click a button "should I move to this city", a magic 8 ball shakes and then displays a message](https://user-images.githubusercontent.com/79113236/128794467-e94402ca-b896-458a-a6ba-13db4db57afc.gif)

Regardless of what the Magic 8 Ball says, you decide whether you like the city or not! Get to clicking!

![user interaction with the app, liking and disliking cities, there is a loading message in between each like or dislike](https://user-images.githubusercontent.com/79113236/128798635-2c213b22-5aed-43fa-8de3-dcf22a77ff4a.gif)

From the favorites page, you can view details again (perhaps remind yourself what you liked about the city in the first place). Don't like it anymore ? Break up with it. We don't care.

![view of the favorites page with several cards, click on one and see details about the city, go back to favorites and remove a city from favorites by clicking a button that looks like a heart breaking](https://user-images.githubusercontent.com/79113236/128798766-c120a4df-40ee-478b-857d-dc62eb543150.gif)

## Evolution of the Project/Reflections
Day 1 of this project began with an exploration of free and open APIs to use and a decision about my niche audience. Inspired by several of my adventurous cohort-mates I settled on this niche group of people who might be daring enough to move on a whim. I developed two user personas loosely based on people I knew, then made wireframes and wrote user stories. I am really proud of how robust the user stories on my project board are. Writing out the issues systematically even allowed me to catch a gap that my wireframes had missed- if I was going to have favorites cards, I was also need a details view! After the user stories, I began coding. I challenged myself on this project to use something quite close to an agile workflow. I deployed my app immediately on Netlify and worked through MVP stories one at a time and did not create a PR until that issue was also tested in Cypress, showed no errors/warnings in the console and was fully ready to deploy. This was a change from previous solo and gorup projects where the bulk of the testing was done at the end and I found it to be extremely rewarding!

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

[Ashton Huxtable](https://github.com/ashton-huxtable) (Code reviewer)

[Ashley O'Brien](https://github.com/AshleyOh-bit) (Code reviewer)

Scott Ertmer (Project Manager)

Kayla Gordon (Project Manager)
