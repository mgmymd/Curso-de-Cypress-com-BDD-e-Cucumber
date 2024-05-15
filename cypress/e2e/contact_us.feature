Feature: WebdriverUniversity - Contact Us Page

Scenario: Valid Contact Us Form Submission
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

Scenario: Invalid Contact Us Form Submission
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a first name
    And I type a last name
    And I type a comment
    And I click on the submit button
    Then I should be presented with an unsuccessful contact us submission message

Scenario: Valid Contact Us Form Submission - Using specific data
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a specific first name "Sarah"
    And I type a specific last name "Woods"
    And I type an email address "sarah_woods@fakeemail.com"
    And I type a word "Hello World, How are you?" and number 6788 within the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message
