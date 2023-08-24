# React + Vite

Deployed on Netilfy [https://celebrated-taiyaki-bf51ce.netlify.app]

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Technologies Used
Reactjs
Vitejs

This application was created using React Hooks, props, two APIs in the Vite local development environment. No additional technologies beside those were used in the creation of this app. 

================================================================================================================================
The Approach Taken

This project was originally meant to be a continuation of a previous project. I wanted to allow the user to call an API with the click of a button to retrieve a random bit of data (a dad joke) and also be able to query for specific data (selecting a character by name). I componentized different features and parts of the app based on the data given from the API and how each would be used by the App component. My goal was to make something fun and seemingly simple while demonstrating core skills required for front-end React developers. 

================================================================================================================================

Installation/Usage Instructions

This app can be used on the deployed site https://celebrated-taiyaki-bf51ce.netlify.app. The user is able to utilize the input field as seen below to enter the name of a character from final fantasy and select them. 

![Alt text](public/select-character.png)

Beneath the character selector input is a display message box containing a message and a button to get a random Dad joke and display it. The button changes text as the user clicks through a short series of messages and then can retrieve another joke.

![Alt text](public/getJoke.png)

================================================================================================================================

Dependencies

    "react": "^18.2.0",
    "react-dom": "^18.2.0"

================================================================================================================================


Unsolved Problems

Adding classes for desired animations has proven difficult. It will be added to future plans.

================================================================================================================================

Future Plans

Add music (Completed)
Randomize if the Chocobo laughs
Add allow user to keep a record of the number times the chocobo has laughed (Completed)
Add animations for the background and the images used 
Bonus image carousel
