# xlsx-js-style

## ℹ️ About

SheetJS with Style! Create Excel spreadsheets with basic styling options.

This project is a fork of [SheetJS/sheetjs](https://github.com/sheetjs/sheetjs) combined with code from
[sheetjs-style](https://www.npmjs.com/package/sheetjs-style) (by [ShanaMaid](https://github.com/ShanaMaid/))
and [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2) (by [Raul Gonzalez](https://www.npmjs.com/~armandourbina)).

All projects are under the Apache 2.0 License

## 🔌 Installation

Install [npm](https://www.npmjs.org/package/xlsx-js-style):

```sh
npm install xlsx-js-style --save
```

Install browser:

```html
<script lang="javascript" src="dist/xlsx.bundle.js"></script>
```

## 🗒 Core API

Please refer to the [SheetJS](https://sheetjs.com/) documentation for core API reference.

## 🗒 Style API

### Cell Style Demo

[Browser Demo](https://github.com/gitbrent/xlsx-js-style/tree/master/demos/browser)

### Cell Style Example

```js
ws["A1"].s = {
	font: {
		name: "Calibri",
		sz: 24,
		bold: true,
		color: { rgb: "FFFFAA00" },
	},
};
```

### Cell Style Properties

Cell styles are specified by a style object that roughly parallels the OpenXML structure. The style object has five
top-level attributes: `fill`, `font`, `numFmt`, `alignment`, and `border`.

| Style Attribute | Sub Attributes | Values                                                                                        |
| --------------- | -------------- | --------------------------------------------------------------------------------------------- |
| fill            | patternType    | `"solid"` or `"none"`                                                                         |
|                 | fgColor        | `COLOR_SPEC`                                                                                  |
|                 | bgColor        | `COLOR_SPEC`                                                                                  |
| font            | name           | `"Calibri"` // default                                                                        |
|                 | sz             | `"11"` // font size in points                                                                 |
|                 | color          | `COLOR_SPEC`                                                                                  |
|                 | bold           | `true` or `false`                                                                             |
|                 | underline      | `true` or `false`                                                                             |
|                 | italic         | `true` or `false`                                                                             |
|                 | strike         | `true` or `false`                                                                             |
|                 | outline        | `true` or `false`                                                                             |
|                 | shadow         | `true` or `false`                                                                             |
|                 | vertAlign      | `true` or `false`                                                                             |

**COLOR_SPEC**: Colors for `fill`, `font`, and `border` are specified as objects, either:

-   `{ auto: 1}` specifying automatic values
-   `{ rgb: "FFFFAA00" }` specifying a hex ARGB value
-   `{ theme: "1", tint: "-0.25"}` specifying an integer index to a theme color and a tint value (default 0)
-   `{ indexed: 64}` default value for `fill.bgColor`

**BORDER_STYLE**: Border style is a string value which may take on one of the following values:

-   `thin`
-   `medium`
-   `thick`
-   `dotted`
-   `hair`
-   `dashed`
-   `mediumDashed`
-   `dashDot`
-   `mediumDashDot`
-   `dashDotDot`
-   `mediumDashDotDot`
-   `slantDashDot`

Borders for merged areas are specified for each cell within the merged area. So to apply a box border to a merged area of 3x3 cells, border styles would need to be specified for eight different cells:

-   left borders for the three cells on the left,
-   right borders for the cells on the right
-   top borders for the cells on the top
-   bottom borders for the cells on the left

## 🙏 Thanks

-   [sheetjs](https://github.com/SheetJS/sheetjs)
-   [js-xlsx](https://github.com/protobi/js-xlsx)
-   [sheetjs-style](https://www.npmjs.com/package/sheetjs-style)
-   [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2)

## 🔖 License

Please consult the attached LICENSE file for details. All rights not explicitly
granted by the Apache 2.0 License are reserved by the Original Author.
