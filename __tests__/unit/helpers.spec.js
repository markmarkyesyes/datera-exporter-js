jest.mock('node-fetch');

import {
    spacesToUnderscores,
    formatPromHelpExpression,
    formatPromTypeExpression
} from '../../src/helpers';

// https://jestjs.io/docs/en/bypassing-module-mocks
const {Require} = jest.requireActual('node-fetch')

test('replaces spaces with underscore for prometheus tag', () => {
    const jsonResponseKey = 'some json key';
    const expectedLabel = 'some_json_key';
    const actualLabel = spacesToUnderscores(jsonResponseKey);
    expect(expectedLabel).toBe(actualLabel);
})

test('formats a string for prometheus help expression', () => {
    const metricLabel = 'some_prom_metric_label';
    const expectedHelpExpression = `# HELP ${metricLabel}`;
    const actualHelpExpression = formatPromHelpExpression(metricLabel);
    expect(expectedHelpExpression).toBe(actualHelpExpression);
})

test('adds optional description for prometheus help expressions', () => {
    const metricLabel = 'some_prom_metric_label';
    const metricDescription = 'some description for the metric';
    const expectedHelpExpression = `# HELP ${metricLabel} ${metricDescription}`;
    const actualHelpExpression = formatPromHelpExpression(metricLabel, metricDescription);
    expect(expectedHelpExpression).toBe(actualHelpExpression);
})

test('formats a string for prometheus type expression', () => {
    const metricLabel = 'some_prom_metric_label';
    const metricType = 'some_prom_metric_type';
    const expectedTypeExpression = `# TYPE ${metricLabel} ${metricType}`;
    const actualTypeExpression = formatPromTypeExpression(metricLabel, metricType);
    expect(expectedTypeExpression).toBe(actualTypeExpression);
})

test('metric type defaults to counter when formatted if no type is provided', () => {
    const metricLabel = 'some_prom_metric_label';
    const expectedTypeExpression = `# TYPE ${metricLabel} counter`;
    const actualTypeExpression = formatPromTypeExpression(metricLabel);
    expect(expectedTypeExpression).toBe(actualTypeExpression);
})