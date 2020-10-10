@FE @app 
Feature: Application Globals

    Scenario: As an unauthenticated user, I can see the app nav menu
        Given I navigate to the login page
        Then I see the main nav menu banner

// to run: ng e2e (see 14:36, E2E Testing video) TODO


// TODO
// Generate coverage document
// Use cucmber and protractor as your use case document


// Cucumber
// Protractor

// Components - some are presentational, some are smart. (things that have access to store or facade are smart.)


// Ex. Heroes-details component (e2e coverage, make sure you are displaying a name, ranking, ability)
// Things that are functionally sound should be unit tested
// Things that are graphically represented or rendered in front end should be end-to-end tested. (header title, name of hero)