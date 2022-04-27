@settings
Feature: Settings screen can be loaded by accessing the settings tab

    Background: Background scenario
        Given User is on the instructions screen

    Scenario: Verify user is able to load the settings screen
        When User navigates to the settings screen
        Then settings screen is loaded successfully
