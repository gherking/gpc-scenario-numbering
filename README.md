# gpc-scenario-numbering

The ScenarioNumbering precompiler is responsible to add an index to all scenario and scenario outlines.

## Example

```gherkin
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
```
It will be modified to:
```gherkin
  @tag1
  Scenario Outline: 1. Test language (<language>)
    Given I am on Home page <language> user
    When <language> language is choosen
    Then I should be on Home page
    And the title should be "<title>"

  @tag2
  Examples:
    | language | title     |
    | EN       | Welcome   |
    | FR       | Bienvenue |
```

## Configuration

ScenarioNumbering accepts the following configuration:

| Option | Type | Description | Default |
|:------:|:----:|:------------|:--------|
| `format` | `String` | The format, how index should be added to the name of the scenario/scenairo outline. Possible tokens: <ul><li>`${name}` the original name</li><li>`${i}` the index</li></ul> | `${i}. ${name}` |