# Resume Builder

A responsive CV/resume builder built with React. Users can enter their personal information, add multiple education and experience entries, preview the completed CV, edit the details, and save the final resume as a PDF through the browser's print functionality.

## Live Demo

**Live:** (https://resume-builder-gules-six.vercel.app/)


## Features

* Add and edit general information
* Add multiple education entries
* Remove education entries
* Add multiple experience entries
* Remove experience entries
* Conditional rendering of Education and Experience sections
* Live form state management with controlled inputs
* Responsive form and CV preview
* Date formatting for the CV preview
* Edit details after submitting the CV
* Print-friendly A4 layout
* Save the CV as a PDF using the browser's print dialog

## Built With

* React
* JavaScript
* CSS
* Vite

## Project Structure

```text
src/
├── components/
│   ├── CV.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Form.jsx
│   ├── GeneralInformation.jsx
│   └── Input.jsx
│
├── styles/
│   ├── global.css
│   ├── form.css
│   └── cv.css
│
├── utils/
│   └── formatDate.js
│
├── App.jsx
└── main.jsx
```

## How It Works

The main application state is stored in `App.jsx`. It contains the general information along with arrays for education and experience entries.

```js
{
    generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: ''
    },

    education: [
        {
            id: '...',
            schoolName: '',
            studyTitle: '',
            startDate: '',
            endDate: ''
        }
    ],

    experience: [
        {
            id: '...',
            companyName: '',
            position: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        }
    ]
}
```

The form components receive the relevant data and change handlers through props. When an input changes, the corresponding handler updates the state in `App.jsx`.

Education and experience entries are stored as arrays, which allows users to dynamically add and remove entries. Each entry receives a unique ID that is used both as React's list key and to identify the correct object when updating or removing an entry.

After submitting the form, the same state is passed to the `CV` component. The CV component renders the stored information without maintaining a separate copy of the data.

## Downloading the CV

The Download CV button uses the browser's built-in print functionality:

```js
window.print();
```

Print-specific CSS changes the layout for printing:

* Uses an A4 page size
* Removes the browser preview shadow
* Removes application controls such as Edit Details and Download CV
* Prevents individual education and experience entries from being split between pages when possible

To save the resume as a PDF, select **Save as PDF** in the browser's print dialog.

For the best result in Chrome, enable **Background graphics** in the print settings so the CV's styling and muted text colors are preserved.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/abdullahrashid359/resume-builder
```

Navigate into the project:

```bash
cd resume-builder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Learning Goals

This project was built as a React learning project and focuses on practicing:

* React components
* Props
* `useState`
* Controlled form inputs
* Lifting state up
* Updating nested state
* Rendering dynamic lists with `map()`
* Adding and removing array items
* React list keys
* Conditional rendering
* Component composition
* Responsive CSS
* CSS transitions
* Print-specific CSS

## Acknowledgements

This project was completed as part of **The Odin Project** React course in Full Stack JavaScript Path.

https://www.theodinproject.com/lessons/node-path-react-new-cv-application
