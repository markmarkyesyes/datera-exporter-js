const getResponseHandlerData = (jsonKey, metricType, metricDescription) => {
    return {
        jsonKey,
        metricType,
        metricDescription
    }
}

const getRequestDataStruct = (endpoint, authToken, responseHandlerData) => {
    return {
        endpoint,
        authToken,
        responseHandlerData
    }
};

export {
    getResponseHandlerData,
    getRequestDataStruct
}