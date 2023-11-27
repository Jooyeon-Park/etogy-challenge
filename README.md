Etogy Challenge
=============

## Live website
* Live website: <https://jooyeon-park.github.io/etogy-challenge/>
* written in React.js
* Material UI, Custom theme applied
* The theme color was from Etogy's official website (Took them from the color info in the dev tools)
* Applied the website icon and title name --> They are found on a tap

## Features
#### Navigation bar
- Using Hash routing(React-router-dom) to deploy it on GitHub
- Projects, Pricing, Contact Us, and Sign-in buttons take you to each page
- Logo: Thought of what Etogy does and inspired by credit card IC chip. Have both the light version and the dark version.
- Supports Mobile view
- For the actual website, I wouldn't put the sign-in page next to the Contact Us button, but I just wanted to view both the logged-in user button on the right so I put the sign-in button on the navigation bar there. When it is final, I will alternate the user profile file and login + sign up buttons

#### Home
- Using an Album layout
- In the future, I think I can use the buttons to navigate to the menus or use them to display projects. If the projects are not visual, I would rather put a list view instead of an album view.

#### Projects
- Display projects
- Can add/edit/delete projects
- Checks for non-empty strings for title and content separately and displays error message
- Applied different widths for xs and md

### Pricing
- Using a secondary theme color for the buttons

### Contact Us
- I put my contact info for now

### Sign In
- Theme color applied
- Checks the valid formatting of the Email and displays an error message when the user clicks the submit button 
  Valid Email Regex I used: anystring@anystring.anystring
  which is:
  
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  It prevents matching multiple '@'

## What took the most time
- Deploying the website took me a while. It was my first time utilizing the GitHub page. I've done more traditional ways to deploy: using my own domain and hooking them up to host service. Using Github was way easier, but I had to do some research and it had a problem with routing so I had to switch my routing to HashRouting.

## If I had more time
- Would make Sign up page use 'isloggedin' to alternate between userprofile and login + sign up
- Better layout design
- Work on the background and animation
- Utilize the theme more. I will add a spacing theme and create more themed components to create feeling of unity

## Developer Info
- Jooyeon Park
- BYU Computer Science (Dec 2023)
- Email: jooyeonpark0131@gmail.com
  
