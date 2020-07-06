const spacesToUnderscores = (labelString) => {
    const spacesRemoved = labelString.split(" ");
    const convertedString = spacesRemoved.join("_");
    return convertedString
}

const formatPromHelpExpression = (metricLabel, metricDescription = '') => {
    const formattedString = "# HELP ".concat(metricLabel, ' ', metricDescription);
    return formattedString.trim()
}

const formatPromTypeExpression = (metricLabel, metricType = 'counter') => {
    const formattedString = "# TYPE ".concat(metricLabel, ' ', metricType);
    return formattedString.trim()
}

export {
    spacesToUnderscores,
    formatPromHelpExpression,
    formatPromTypeExpression
}