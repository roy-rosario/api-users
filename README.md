#API USERS

API-users is a simple single page application that makes a GET request to https://jsonplaceholder.typicode.com
The website is a mock API for testing purposes. It was developed as a React.js project.

The endpoints used in this sample are 'users' and '/posts', each of the fake users have 10 posts associated to their individual IDs

#LANGUAGES
JSX, CSS, JavaScript

#DEPENDENCIES

-The Axios library for React is used to make API calls; found within the App.js Component
-The emotion/styled library for React is used in addition to standard app.css & index.css files. This dependency allows for custom styled 
components that can take props in order to get enhanced functionality based on user input.

#COMPONENTS

Although the app.js can be considered the main 'container' of the page, as well as having the state variables 'users' & 'posts' tracking API calls,
The Users.js compoment has most of the application display logic is contained. The file is within the 'components' folder of the project hierarchy

Taking the users & posts variables as props, Users.js renders the information as individual "cards" for each user, each of which can be expanded to reveal
their respective posts. This is achieved by mapping the users and posts array coming from the data given by the app.js component. Finally, 
the app.js renders the results conditionally. If the promises for each request have been fulfilled, it renders said card components, if not, the user will get
as simple 'loading' message.

A hosted version of this project is accessible to view by following this link: https://roy-rosario.github.io/api-users/
