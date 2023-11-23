# E-Commerce Backend API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

An Express.js-based REST API for building out a functional back end for an e-commerce website.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Technologies Used](#Technologies-Used)
- [Questions](#Questions)
- [Credits](#Credits)

## Installation

To install this application, clone the repository to your local machine. Open the repository in VS Code (or other IDE) and open the terminal. Run the command ```npm install``` to install and set up the dependencies. You will also need to have a .env file in the root directory of the local repository for connecting the MySQL database to the application. An example is provided below:

## Usage

Once your enviornment is properly set up and dependencies are installed, go back to the terminal and run the schema.sql file located in the db folder. To do this, run ```mysql -u yourUsername -p``` in the terminal. Replace yourUsername with your mysql username. Enter your mysql password when prompted. Then, run ```SOURCE db/schema.sql``` to create the database. Once the database is set up, it needs to be seeded. To do this, run ```npm run seed``` in the terminal.  Now that the database is set up and seeded the application is ready for use. To start the server, run ```npm start``` in the terminal. The server should now be running and is ready to accept requests. I suggest using Insomnia to make requests to the backend API.

## License 

This project is available under the MIT license. See [LICENSE](./LICENSE) for more info.

## Contributing

This project is open to contribution! To make any contributions, go ahead and fork the repo and create a new branch. Open a GitHub issue describing all updates/changes that you plan to make. When ready, push the changes to your branch and sumbit a pull request and wait for approval before merging.

## Tests

N/A

## Technologies Used

Javascript, Node.js, Express.js, MySql, Sequelize, Insomnia (for making requests to the server)

## Questions

If there are any questions, feel free to reachout to me on [GitHub](https://github.com/tavargas9), or send me an [email](mailto:tavargas9@gmail.com).

## Credits

This README was generated using [README Generator](https://github.com/tavargas9/README-generator) created by [Tomas Vargas](https://github.com/tavargas9).
