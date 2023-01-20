# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Routes

The project has the dashboard routes ("/") and error routes ("/error"). In the dashboard route, when using query params, like the example below, different requests will be made in the available api.

Example:

The route http://localhost:3000/?delay=10000 makes a request in the api causing a delay in the response of the application.

The route http://localhost:3000/?internalError makes a request in the api causing a status error 500 as a response from the application, with this error the application directs the user to a 500 error page.

The route http://localhost:3000/?timeoutmakes a request in the api causing an error with status 408 (request timeout), in response to the user, the application generates a toastify notification of the error.

# Dashboard

The dashboard route has the anticipation calculator, the application's main component. The calculator is capable of receiving up to 4 parameters to perform the calculation.

1st Amount: the first parameter used is the amount, which has the base value for the calculation;

2nd Installments: the second parameter is the number of installments for the calculation to be based on;

3rd Mdr: the third is the percentage charged and calculated based on the amount;

4th Days: the fourth parameter is used to provide the period on which the calculation will be based to return the anticipated value;

The first three parameters are mandatory, the fourth is an optional parameter, and its value can be entered as follows:
1,2,50;
Values ​​entered in this way in the input will result in the calculation based on the number of days provided, if values ​​are not passed in the input, the application uses default values ​​to complete the calculation.

## Available Scripts

Install project dependencies

### `yarn` or `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
