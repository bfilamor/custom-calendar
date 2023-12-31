
# Custom Date Calendar Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Calendar Props`
| Name  | Type | Default | Description
| --- | --- |  --- | --- 
| fullWidth | Boolean  |  | Gives the Calendar Component a full width layout
| dateState | Object  |  | The state that represents the selected date when DatePicker is used
| handleChange | function(newDate)  |  | Called when a date is selected

### `DatePicker Props`
| Name  | Type | Default | Description
| --- | --- |  --- | --- 
| value | string  |  | Date state passed to the date picker input
| handleChange | function(newDate)  |  | Called when a date is selected




