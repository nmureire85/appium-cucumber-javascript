@dashboard
Feature: Dashboard screen can be loaded by accessing the Dashboard tab

    Background: Background scenario
        Given User is on the instructions screen

    Scenario: Verify user is able to load the Dashboard screen
        When User navigates to the dashboard screen
        Then dashboard screen is loaded successfully


