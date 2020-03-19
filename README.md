# American Addiction Centers coding task

This is a great app to find a random user based on gender.

## About

This is app has a Node server running with Express.js. It serves an HTML page where you can find two buttons, click on the button will send an Http request to [Random User API](https://randomuser.me/) which is going to respond with JSON file that includes random users data. After receiving data, our application is going to generate 9 user cards and render them on screen. The project is built with vanilla JavaScript, HTML, CSS.

<p align="center">
  <img width="460" height="300" src="https://github.com/konstagap/AAC-coding-task/blob/master/acc.jpg?raw=true">
</p>

## Getting Started

To set this project up and running you can do next:

- Clone or download this project folder to your local machine (click green button under contributors)
- Install dependencies, by running `npm install` in your terminal command line, make sure you are in the same folder with project.
- After dependencies been installed, run `npm start` on Windows and `npm run start-mac` on IOS, this will start the server in development mode serving app on http://localhost:3000/ .

### Prerequisites

The project comes with `package.json` file which has all the dependencies listed in it, after running `npm install` you do not have to install anything separately to make the app running. **However**, application is using Express.js server, to install Express individually you can run

```
npm install express
```

in your terminal command line.
You can learn more about [Express here.](https://expressjs.com/)

## Authors

- **Kostas Agapov** - 🏋️ - [Kostas](https://github.com/konstagap)

## License

This project is licensed under the MIT License
