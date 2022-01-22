'use strict';

import { Background, Feature, Element, Rule } from 'gherkin-ast';
import { PreCompiler } from 'gherking';
import { ScenarioNumberingConfig } from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require("debug")("gpc:scenario-numbering");

const DEFAULT_CONFIG: ScenarioNumberingConfig = {
    format: '${i}. ${name}'
};

class ScenarioNumbering implements PreCompiler {    
    private config: ScenarioNumberingConfig;
    private i: number = 0;
    constructor(config?: ScenarioNumberingConfig) {
        debug("Initializing ScenarioNumbering, config: %o", config)
        this.config = {
            ...DEFAULT_CONFIG,
            ...(config || {}),
        };
    }

    onFeature(feature: Feature) {
        debug("Processing Scenarios of Feature: %s", feature.name)
        feature.elements.forEach((element: Element | Rule) => {
            if (!(element instanceof Background || element instanceof Rule)) {
                element.name = this.config.format
                    .replace(/\$\{i\}/g, `${++this.i}`)
                    .replace(/\$\{name\}/g, element.name);
            }
        });
    }

    onRule(rule: Rule) {
        debug("Processing Scenarios of Rule: %s", rule.name)
        rule.elements.forEach((element: Element) => {
            if (!(element instanceof Background)) {
                element.name = this.config.format
                    .replace(/\$\{i\}/g, `${++this.i}`)
                    .replace(/\$\{name\}/g, element.name);
            }
        });
    }
}

export = ScenarioNumbering;