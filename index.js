function stringSmartTrimmer(stringArray, maxLength) {
    let stringObjects = stringArray.map((value,index) => ({value, index}));
    let label = '';

    let charsLength = maxLength;
    let itemLength = Math.floor(charsLength / stringObjects.length);

    stringObjects = stringObjects.sort((a, b) => a.value.length - b.value.length);
    
    stringObjects = stringObjects.map((so, index) => {
        let trimmedExt = so.value;
        if (so.value.length > itemLength)
            trimmedExt = so.value.substring(0, itemLength);

        so.value = trimmedExt;

        if (stringObjects.length > index + 1) {
            charsLength -= trimmedExt.length;
            itemLength = Math.floor(charsLength / (stringObjects.length - index - 1));
        }
        return so;
    });

    return stringObjects
        .sort((a,b) => a.index - b.index) // sort by original index
        .map(so => so.value);

};

module.exports.default = stringSmartTrimmer;
