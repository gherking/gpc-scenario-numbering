import { load, process } from "gherking";
import { Document } from "gherkin-ast";
const ScenarioNumbering = require("../src");

const loadTestFeatureFile = async (file: string): Promise<Document> => {
    const ast = await load(`./tests/data/${file}`);
    delete ast[0].uri;
    return ast[0];
}

describe("Scenario numbering", ()=> {
    let base: Document;

    beforeAll(async () => {
        base = await loadTestFeatureFile("input.feature");
    });

    test("should process feature files with default config", async () => {
        const expected = await loadTestFeatureFile("expected.1.feature");
        const actual = process(base, new ScenarioNumbering());
        expect(actual[0]).toEqual(expected);
    });

    test("should process feature files with custom config", async () => {
        const expected = await loadTestFeatureFile("expected.2.feature");
        const actual = process(base, new ScenarioNumbering({
            format: '${i} - ${name}'
        }));

        expect(actual[0]).toEqual(expected);
    });
});
