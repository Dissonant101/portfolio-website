# DynamicResumes

An online tool to generate PDFs.

## Description

DynamicResumes is a React application hosted on AWS Amplify. It serves as a proof of concept of using React-pdf to generate styled resumes.

## Development

### Installation

Run in the project root directory:

    $ git clone https://github.com/Dissonant101/portfolio-website
    $ cd portfolio-website
    $ npm i

### Run Local Development Server

After installation, run in the project root directory:

    $ npm start

The server runs locally at http://localhost:3000/.

### Project Structure

This project utilizes React, React-pdf, TypeScript, Tailwind CSS, and AWS tools.

React components are located in `src/components/`.

Installation requirements are in `package.json`.

### Deployment

Automatic CI/CD. Code pushed to the main branch is automatically deployed to https://main.d2fa4peql7mwrv.amplifyapp.com/.
