# string-smart-trimmer
This repository contains a trimmer for string arrays.

## Usage
`stringSmartTrimmer(array: string[], maxLength: number): string[];`

## Examples
```
const array = ['fig','banana', 'Cornelian cherry', 'GrapeFruit'];
stringSmartTrimmer(array, 20);
// output: [ 'fig', 'banan', 'Cornel', 'GrapeF' ]

stringSmartTrimmer(array, 30);
// output: [ 'fig', 'banana', 'Cornelian c', 'GrapeFruit' ]

stringSmartTrimmer(array, 15);
// output: [ 'fig', 'bana', 'Corn','Grap' ]

```
