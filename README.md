# gpc-scenario-numbering

![Downloads](https://img.shields.io/npm/dw/gpc-scenario-numbering?style=flat-square) ![Version@npm](https://img.shields.io/npm/v/gpc-scenario-numbering?label=version%40npm&style=flat-square) ![Version@git](https://img.shields.io/github/package-json/v/gherking/gpc-scenario-numbering/master?label=version%40git&style=flat-square) ![CI](https://img.shields.io/github/workflow/status/gherking/gpc-scenario-numbering/CI/master?label=ci&style=flat-square) ![Docs](https://img.shields.io/github/workflow/status/gherking/gpc-scenario-numbering/Docs/master?label=docs&style=flat-square)

The ScenarioNumbering precompiler is responsible for adding an index to all scenarios and scenario outlines.

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

  Scenario: Test without tag
    Given I am on Home page user
    Then I should be on Home page
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

  Scenario: 2. Test without tag
  Given I am on Home page user
  Then I should be on Home page
```

## Configuration

ScenarioNumbering accepts the following configuration:

| Option | Type | Description | Default |
|:------:|:----:|:------------|:--------|
| `format` | `String` | The format, how index should be added to the name of the scenario/scenairo outline. Possible tokens: <ul><li>`${name}` the original name</li><li>`${i}` the index</li></ul> | `${i}. ${name}` |

## Other
This package uses [debug](https://www.npmjs.com/package/debug) for logging, use `gpc:scenario-numbering` :
```shell
DEBUG=gpc:scenario-numbering* gherking ...
```
For detailed documentation see the [TypeDocs documentation](https://gherking.github.io/gpc-scenario-numbering/).
