import {
    getResponseHandlerData,
    getRequestDataStruct
} from '../../src/structs';

test('structure for response handling constructs correctly', () => {
    const exampleJsonLocation = 'some.object.structure';
    const exampleMetricType = 'some prometheus metric type';
    const exampleMetricDescription = 'some prometheus metric description';
    const expectedResponseHandlingStruct = {
        jsonKey: exampleJsonLocation,
        metricType: exampleMetricType,
        metricDescription: exampleMetricDescription
    };
    const actualResponseHandlingStruct = getResponseHandlerData(
        exampleJsonLocation,
        exampleMetricType,
        exampleMetricDescription
    );
    expect(actualResponseHandlingStruct).toStrictEqual(expectedResponseHandlingStruct);
})

test('structure for api calls constructs correctly', () => {
    const exampleEndpoint = '/some/endpoint';
    const exampleAuthToken = 'someauthtoken';
    const exampleResponseHandlerData = {someKey: 'someValue'};
    const exampleRequestDataStruct = {
        endpoint: exampleEndpoint,
        authToken: exampleAuthToken,
        responseHandlerData: exampleResponseHandlerData
    };
    const actualRequestDataStruct = getRequestDataStruct(
        exampleEndpoint,
        exampleAuthToken,
        exampleResponseHandlerData
    )
    expect(actualRequestDataStruct).toStrictEqual(exampleRequestDataStruct);
});