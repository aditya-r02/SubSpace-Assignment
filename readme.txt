SUBSPACE ASSIGNMENT
Blog Analytics with Express and Lodash

DESCRIPTION-
It is a backend web application that analyzes data received from a third-party API, and provide insightful statistics to clients. Also, it can filter the data on basis of some queires received from the user.

**bonus - Using lodash memoize function, the number of API calls have been reduced.

TECH STACK-
Express.js, Node.js

INSTALLATION-
1. install node if not previously installed from https://nodejs.org/en
2. open terminal and set current directory to this folder
3. run the following command
	npm init

ROUTES-
This application has two routes.
1. /api/blog-stats
This route fetches data from third-user API, then analyse the data using Lodash, and return the following statistics to the user.
	Number of blogs, blog with longest title, Number of blogs with word "privacy" in it,
	array of blogs with unique titles
2. /api/blog-search?queury=YOUR_QUERY
This route fetches all the blogs which have the query included in their titles.

DEPENDENCIES-
1. express
	Express is a minimal and flexible Node.js web application framework that provides a 	robust set of features for web and mobile applications.
2. axios
	Promise based HTTP client for the browser and node.js
3. dotenv
	Dotenv is a zero-dependency module that loads environment variables from a .env file 	into process.env. 
4. lodash
	Lodash makes JavaScript easier by taking the hassle out of working with arrays, 	numbers, objects, strings, etc.
5. nodemon
	nodemon is a tool that helps develop Node.js based applications by automatically 	restarting the node application when file changes in the directory are detected.

##Created by-
This project was created by Aditya Rana. You can reach out to me via the following links.
email - ranaaditya01@outlook.com
Linkedin- www.linkedin.com/in/adityarana2003

