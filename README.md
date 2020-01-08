# Description
This DEMO is to demostrate How we use library to create common Sharing Business Layer Component and Sharing Visual Components.

The Business Component will contains only business models or common functions
The Visual Component will build on top of Business Component with Standard UI elements.

# Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Before Run

Run `ng build shared-libs` | this will build the library locally..

## Development server

Run `ng serve [project_name]` | adminPortal or advisorPortal


## First Web Component Summary

to get your web component working please run npm run build:elements

and import the js file into your own project. place <shared-welcome-page></shared-welcome-page> into your html.

With build-element.js, I was running into problem with zone.js. It is because I concat es5 and es2015 file into one file. Thats why the zone.js is being loaded twice. 

Another problem I ran in was  Failed to construct 'HTMLElement', it is solved by building only es2015. currently not sure the true reason.
