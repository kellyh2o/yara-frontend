@FE @reflections
Feature: Reflections

  Scenario: As an authenticated user, I can see a list of reflections on the home page
    Given I navigate to the login page
    When I enter my credentials
    And I see the authenticated home page
    Then I see a list of reflections

  Scenario: As an authenticated user, I can list of reflections on the reflections page
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the reflections page
    Then I see a list of reflections

  Scenario: As an authenticated user, I can select a single reflection
    Given I navigate to the login page
    When I enter my credentials
    Then I see the authenticated home page
    And I navigate to the reflections page
    Then I see a list of reflections
    When I select a single reflection
    Then I see that reflections details
