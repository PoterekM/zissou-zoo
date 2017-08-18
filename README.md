# Zoo Tracker

## Description

## User Story
* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

### Wishlist
* Extend the functionality of the app by building out the animal model to further enhance the app.
* Add custom SASS styling with corresponding Gulp tasks to compile.
* Display of the total number of caretakers needed in a day.
* Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
* Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
* Add a new master component to average the total age for each species.
* Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)

## Development Planning
* Build program using Angular CLI
* Due to lack of using a database, hard code the constructor with Species, Name, Age, Diet, Location, Caretakers, Sex, Likes, and Dislikes so program functionality can easily be seen.
  * Wishlist for styling: add pictures of the zoo
* Create components for animal list, edit animal, new animal.
* Add a pipe for sorting animals less than 2 years old or greater than 2 years old.
* Style application and clean up code.
* Move on to Wishlist items.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Acknowledgements
* Animal informational tile background image is provided by:
https://www.teepublic.com/t-shirt/31512-steve-zissou
* page background image
http://www.soitgoesmag.com/diary/archive-wes-anderson-in-issue-3
