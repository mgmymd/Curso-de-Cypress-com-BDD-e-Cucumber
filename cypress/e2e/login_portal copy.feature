Feature: WebdriverUniversity - Login Portal page

Background:
    Given I navigate to the WebdriverUniversity homepage
    When I click on the Login Portal button

Scenario: Validate successful login at Login Portal page
    And I type the correct username "webdriver"
    And I type the correct password "webdriver123"
    And I click on the Login button
    Then I should be presented with a pop up with a successful login message 

Scenario: Validate unsuccessful Login at Login Portal page
    And I type the correct username "webdriver"
    And I type the correct password "aaaaaaaaaaah"
    And I click on the Login button
    Then I should be presented with a pop up with a unsuccessful login message 

Scenario Outline: Validate Login Portal page - Using specific data with scenario outlines
    And I type an username '<username>' and a password '<password>'
    And I click on the Login button
    Then I should be presented with a pop up with login message '<message>'

    |username   |password          |message                 |
    |webdriver  |webdriver123      |validation succeeded    |
    |webdriver  |aaaaaaaaaaah      |validation failed       |
