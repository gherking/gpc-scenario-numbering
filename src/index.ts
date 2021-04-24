'use strict';

import { Background, Feature, Element, Rule } from 'gherkin-ast';
import { PreCompiler } from 'gherking';
import { ScenarioNumberingConfig } from './types';

const DEFAULT_CONFIG: ScenarioNumberingConfig = {
    format: '${i}. ${name}'
};

class ScenarioNumbering implements PreCompiler {    
    private config: ScenarioNumberingConfig;
ó
    constructor(config?: ScenarioNumberingConfig) {
        this.config = {
            ...DEFAULT_CONFIG,
            ...(config || {}),
        };
    }

    onFeature(feature: Feature) {
        let i: number = 0;
        feature.elements.forEach((element: Element | Rule) => {
            if (!(element instanceof Background)) {
                element.name = this.config.format
                    .replace(/\$\{i\}/g, `${++i}`)
                    .replace(/\$\{name\}/g, element.name);
            }
        });
    }
}

export = ScenarioNumbering;