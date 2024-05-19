@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data with cucumber regular expressions
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I type an email address "sarah_woods@fakeemail.com"
        And I type a word "Hello World, How are you?" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page - Using specific data with scenario outlines
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with a header text '<message>'

Examples:
    |   firstName   |   lastName    |       emailAddress            |          comment      |               message                 |
    |   Ash         |   Jones       |   ash_jones@email.com         |   Hello, How are you? |   Thank You for your Message!         |
    |   Karlyle     |   Frost       |   karlyle_frost@email.com     |   ...Hi               |   Thank You for your Message!         |
    |   Kyle        |   Frost       |   kyle_frost                  |   Test test 123       |   Error: Invalid email address        |
