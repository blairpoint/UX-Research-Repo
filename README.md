BACK-END NODE.JS PACKAGE DEPENDENCIES
=====================================

    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.11.13",

FRONT-END NODE.JS PACKAGE DEPENDENCIES
======================================

    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.3",
    "@testing-library/user-event": "^12.6.0",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.3",
    "react-bootstrap-icons": "^1.3.0",
    "react-bootstrap-typeahead": "^5.1.4",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"

INSTALLATION INSTRUCTIONS
=========================

Below are instructions for installation on Windows 10. Install options will
vary depending on platform; there are also installers compatible with Linux
and MacOS.

Install Node.js and npm (Node package manager) from the following website
(choose the LTS install):
https://nodejs.org/en/download/

Create a directory where you want the application files to live.

Inside that directory, create two directories, ‘back-end’ and ‘front-end’.

Using the Windows 10 command prompt: Go to the back-end directory.

npm init

Enter the application details you would like to be recorded as application
information.

The installation will create a file called package.json that will create a record
of all Node modules installed.

Install the following modules using the command line:

npm install express

npm install cors

npm install mongoose


Change directory to the front-end directory.

npx create-react-app .

npm install axios

npm install bootstrap

npm install react-bootstrap

npm install react-bootstrap-icons

npm install react-bootstrap-typeahead

npm install react-router-dom


Download the code package from the GitLab repository:
https://gitlab.ecs.vuw.ac.nz/eckricmade/ibm-research-repository

Place the files and folders into the respective back-end and front-end directories that you created on your
workstation.

Using the command line, go to the back-end directory:
node index.js start

You should see the following: Server is running on port 3001

Using a web browser you should see output if you access http://localhost:3001/get-all

Using the command line, go to the front-end directory.

npm start

This opens a web browser and the application View screen.

This will connect to the development database in the cloud (MongoDB Atlas).
