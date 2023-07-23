function x(stringArray, maxLength) {
    let strings = stringArray;
    let label = '';

    let charsLength = maxLength;
    let itemLength = Math.floor(charsLength / strings.length);

    strings = strings.sort((a, b) => a.length - b.length);
    
    strings = strings.map((ll, index) => {
        let trimmedExt = ll;
        if (ll.length > itemLength)
            trimmedExt = ll.substring(0, itemLength) + '\u2026';

        ll = trimmedExt;

        if (strings.length > index + 1) {
            charsLength -= trimmedExt.length;
            itemLength = Math.floor(charsLength / (strings.length - index - 1));
        }
        return ll;
    });

    strings
        // .sort((a, b) => a.index - b.index)
        .forEach(ll => {
            // sort by index
            label = label ? label + ' - ' + ll : ll;
        });

    return label;
}

console.log(x(['fig','banana', 'Cornelian cherry', 'GrapeFruit'], 20));