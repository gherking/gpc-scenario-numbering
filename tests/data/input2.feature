Feature: ScenarioNumbering
  As a TAE
  I want to index ScenarioOutlines and Scenarios
  So that I can collect extra information

  @tagR1
  Rule: Rule1
    Given I follow the rules
    
    Background: Background
    Given I start a browser
    When the browser finished loading
    Then I can begin testing

    Scenario: Test without tag(<language>)
    Given I am on Home page (<language>) user
    Then I should be on Home page

    @tag1
    Scenario Outline: Test language (<language>)
      Given I am on Home page <language> user
      When <language> language is choosen
      Then I should be on Home page
      And the title should be "<title>"
    
    @tag2
    Examples:
      | language | title     |
      | EN       | Welcome   |
      | FR       | Bienvenue |

  @tagR2
  Rule: Rule2

    @tag1
    Scenario Outline: Test cat (<language>)
      Given I am on Home page <language> user
      When <language> language is choosen
      Then I should be on Home page
      And the title should be "<title>"
    
    Examples:
      | language | title     |
      | EN       | Welcome   |
      | FR       | Bienvenue |