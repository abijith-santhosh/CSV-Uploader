# CSV Upload

## Project Overview

This project is a simple csv uploader that lets you upload csv files and then render them in a tabular form on the frontend. It also supports searching and sorting(ascending and descending). Pagination is also implemented for detailed viewing. It is built using MVC architecture and mongodb is the database used. Multer is used for file upload and csv-parser is used for parsing csv files. Google charts are also used for displaying the table column in chart formt based on the column selected

## Technologies used

[![My Skills](https://skillicons.dev/icons?i=html,css,js,bootstrap,nodejs,express,mongodb)](https://skillicons.dev)

## Features

1) CSV Upload : CSV files can uploaded from frontend and multer is used to upload files. Validation is done both on frontend and backend
2) File Display : The uploaded files are displayed on frontend along with details like filename, uploaded at, size and option to view the details of file
3) View Data : The details of the csv files are viewed on a new page by clicking the view button
4) Searching : Data will be filtered based on the search term entered
5) Sorting : The data can sorted in ascending or descending for each column by clicking on the upward and downward arrows
6) Pagination : Navigate through data with the pagination features that displays upto 100 rows per page
7) Charts : A chart is available, made using google charts that displays the column data based on selected columns
8) EJS Templates : Ejs tempalates are used for rendering the pages


## How to use

1) Clone the repository to your local machine.<br>
2) Navigate to the project directory.<br>
3) Install dependencies using npm install.<br>
4) Create a .env file with the necessary environment variables(DB_URL and PORT)<br>
6) Start the server using node <filename><br>
7) Access the application through http://localhost:3200

## Database Usage

The API's utilizes MongoDB and Mongoose for data storage and retrieval. Ensure you have MongoDB and Mongoose installed and configured for the application to function properly.



