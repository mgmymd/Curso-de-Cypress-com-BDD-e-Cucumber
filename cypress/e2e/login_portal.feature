Feature: WebdriverUniversity - Login Portal page

Background: Pre-condition
    When I wait for 5 seconds

    Scenario: Validate successful login at Login Portal page
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Login Portal button
        And I type the correct username "webdriver"
        And I type the correct password "webdriver123"
        And I click on the Login button
        Then I should be presented with a pop up with a successful login message 

    Scenario: Validate unsuccessful Login at Login Portal page
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Login Portal button
        And I type the correct username "webdriver"
        And I type the correct password "aaaaaaaaaaah"
        And I click on the Login button
        Then I should be presented with a pop up with a unsuccessful login message 

    Scenario: Validate valid credentials on Login Portal page - Using POM
        # Given I navigate to the WebdriverUniversity homepage
        # When I click on the Login Portal button
        # Using POM:
        Given I navigate to the WebdriverUniversity Login Portal Page
        And I type the correct username "webdriver"
        And I type the correct password "webdriver123"
        And I click on the Login button
        Then I should be presented with a pop up with a successful login message 

    Scenario Outline: Validate valid and invalid credentials on Login Portal page - Using specific data with scenario outlines
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Login Portal button
        And I type an username <username> and a password <password>
        And I click on the Login button
        Then I should be presented with a alert box with login message '<message>'

Examples:
    |username   |password          |message                 |
    |webdriver  |webdriver123      |validation succeeded    |
    |webdriver  |aaaaaaaaaaah      |validation failed       |
