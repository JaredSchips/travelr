## Project Travelr

- [Live Link to Heroku APP]()

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Application Screenshot Preview](#application-screenshot-preview)
- [Developers](#developers)
- [License](#License)

## Description

A full-stack MERN application is a web app that uses MongoDB, Express.js, React, and Node.js to provide a complete end-to-end solution.

MERN apps typically include a React-based client-side interface that communicates with an Express.js-based server-side API. Additional tools like Webpack, Apollo-GraphQL, and Bootstrap may be used.

MERN apps are popular due to their flexibility, scalability, and ability to deliver high-performance web applications.

## User Story

- As a user, I want to be able to create and manage my own posts, as well as view and interact with posts created by other users.
- I want the interface to be intuitive and easy to navigate, and I want to be able to search for specific posts using keywords.
- Additionally, I want the application to be responsive and work well on both desktop and mobile devices.
- I also want to feel secure using the application, so I expect the application to include user authentication and protect sensitive information.
- Ultimately, I want to have a positive user experience and feel like the application is providing value to me.

## Project Requirements

- Use React for the front end.

- Use GraphQL with a Node.js and Express.js server.

- Use MongoDB and the Mongoose ODM for the database.

- Use queries and mutations for retrieving, adding, updating, and deleting data.

- Be deployed using Heroku (with data).

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Include authentication (JWT).

- Protect sensitive API key information on the server.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, and so on).

- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

## Installation

- Prerequisites

```md
- Bash
- Node.js (v14 or higher)
- MongoDB
```

- Installaion Steps:

```md
1. Clone the repository: git clone 'repository-url'

2. Navigate to the project directory: cd 'project-folder'

3. Install server-side dependencies: npm install

4. Install client-side dependencies: cd client && npm install
```

5. Configure environment variables:

- Create a .env file in the root directory and define the following variables:

```md
PORT='port-number'

MONGO_URI='mongo-db-uri'

JWT_SECRET='jwt-secret'
```

- Update the client/.env file with the following variable:

```md
REACT_APP_GRAPHQL_URI=http://localhost:'port-number/graphql'
```

6. Seed the database: npm run seed

7. Start the development server: npm run dev

```md
That's it! You should now be able to access the application at http://localhost:'port-number'
```

## Usage

- Access the application by navigating to the URL where it is hosted.

- Upon loading, you will be presented with the home page of the application.

- To create an account, navigate to the signup page and fill out the required fields.

- Once you have created an account, you can log in with your credentials to access the protected features of the application.

- Explore the functionality of the application, such as creating, editing, and deleting posts.

- You can also browse posts created by other users on the home page and search for specific posts using keywords.

- Once you have finished using the application, log out to ensure the security of your account.

## Technologies Used

- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
- ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
- ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Application Screenshot Preview

![GameList Screenshot 1]()

##

![GameList Screenshot 2]()

##

![GameList Screenshot 3]()

## Developers

- Jared Schips (JaredSchips) [Link to Github](https://github.com/JaredSchips)
- Omar Correa (Omar-Correa)[Link to Github](https://github.com/omar-correa)
- Daphne Tate (Daphnetatertot) [Link to Github](https://github.com/Daphnetatertot)
- Martin Cespedes (MartinCespedes) [Link to Github](https://github.com/MartinCespedes)
- Vlada Bolotova (Vlada) [Link to Github](https://github.com/VladaBolotova)

## Licenses

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2023 project-travelr

This software is copyrighted by the project-travelr team. All rights reserved.

This project is covered under the MIT License.
