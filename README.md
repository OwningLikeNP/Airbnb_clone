# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Install and Run this Project

To run this project, you need to install Node.js for the server and MySQL Workbench for the Database.
To get the database up and running, install and launch MySQL Workbench and create a connection with the following parameters: \

    host: 'localhost' \
    user: 'root' \
    password: 'moazzam' \
    database: 'IU_db' \
    Port: 3307 \

If you don't specify above parameters for your SQL Server, you will need to change server connection parameters in the code files.

After setting up the server connection, download 'Database SQL.sql' file from the repository and import it to recreate my database. This will finish the database setup for this project.

To run the project, download the full repository by clicking on the green 'Code' button and then selecting 'Download Zip'. Extract the zipped file to your desired location. \

In your terminal, navigate to the project directory and then into the 'Backend' folder and type npm start to launch the backend server. \

Open another terminal, navigate to the project directory and then type npm start again to run the frontend server. \

Your Airbnb Clone application should start in your default browser.

### `Packages used for this project`

Front End: 

Material UI Core: npm install @material-ui/core \
Material UI Icons: npm install @material-ui/icons \
Material UI Date Range Picker: npm install react-date-range-picker \
React Router: npm install react-router-dom \
Axios: npm install axios \
Date-FNS: npm install date-fns\
\
Back End: \
Express: npm install express \
MySQL: npm install mysql \
CORS: npm install cors \
Nodemon: npm install nodemon



