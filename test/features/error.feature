@error
Feature: Failing test during assertion

    Background: Background scenario
        Given User is on the instructions screen

    Scenario: Verify test fails during assertion when typo is in  expec()
        When User navigates to the settings screen
        Then settings screen is loaded successfully
        Then settings screen loser option is displayed