@FE @reflections
Feature: Reflections

  Scenario: As an authenticated user, I can see a list of reflections on the home page
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I see a list of reflections

  Scenario: As an authenticated user, I can see a list of reflections on the reflections page
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    Then I navigate to the reflections page
    And I see a list of reflections


  Scenario: As an authenticated user, I can select a single reflection to view its details
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the reflections page
    Then I see a list of reflections
    When I select a single reflection
    Then I see that reflection's title
    And I see that reflection's text
    And I see the creation date of the reflection

  Scenario: As an authenticated user, I can create a new reflection
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the create reflection page
    Then I see a form where I can enter a reflection

