@usermenu
Feature: User menu interaction

    Background: Background scenario
        Given User is on the instructions screen

    Scenario: Verify user can drag to see user menu screen and click button to see an alert
        When User slides menu by dragging from left edge of screen
        When menu screen is displayed
        When User interacts with button
        Then an alert is displayed to user
        
