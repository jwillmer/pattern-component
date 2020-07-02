# css-pattern



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                 | Type     | Default     |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `pattern`    | `pattern`     | Pattern name to display                                                                                     | `string` | `undefined` |
| `patternFor` | `pattern-for` | Selectes a pattern calculated from the input. Displays always the same pattern if the input stays the same. | `string` | `undefined` |


## Methods

### `getAllAvailablePatterns() => Promise<IPattern[]>`

Returns a list of all available pattern objects.

#### Returns

Type: `Promise<IPattern[]>`



### `getPatternFromExternalTitle(name: string) => Promise<IPattern>`

Returns a pattern calculated from the input. Returns always the same pattern if the input stays the same.

#### Returns

Type: `Promise<IPattern>`



### `getPatternFromPatternName(name: string) => Promise<IPattern>`

Returns a pattern object. If it can't find the pattern it returns the first pattern in the list.

#### Returns

Type: `Promise<IPattern>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
