import { load, process } from "gherking";
import { Document } from "gherkin-ast";
import ScenarioNumbering = require("../src");

const loadTestFeatureFile = async (file: string): Promise<Document> => {
    const ast = await load(`./tests/data/${file}`);
    delete ast[0].uri;
    return ast[0];
}

describe("Scenario numbering", ()=> {
    let base1: Document;
    let base2: Document;

    beforeAll(async () => {
        base1 = await loadTestFeatureFile("input.feature");
        base2 = await loadTestFeatureFile("input2.feature");
    });

    test("should process feature files with default config", async () => {
        const expected = await loadTestFeatureFile("expected.1.feature");
        const actual = process(base1, new ScenarioNumbering());

        expect(actual[0]).toEqual(expected);
    });

    test("should process feature files with custom config", async () => {
        const expected = await loadTestFeatureFile("expected.2.feature");
        const actual = process(base2, new ScenarioNumbering({
            format: '${i} - ${name}'
        }));

        expect(actual[0]).toEqual(expected);
    });
});
