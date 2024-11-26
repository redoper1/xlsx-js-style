# xlsx-js-style

## ℹ️ About

SheetJS with Style! Create Excel spreadsheets with basic styling options using JavaScript.

This project is a fork of [gitbrent/xlsx-js-style](https://github.com/gitbrent/xlsx-js-style), which is a fork of [SheetJS/sheetjs](https://git.sheetjs.com/sheetjs/sheetjs/) combined with code from
[sheetjs-style](https://www.npmjs.com/package/sheetjs-style) (by [ShanaMaid](https://github.com/ShanaMaid/))
and [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2) (by [Raul Gonzalez](https://www.npmjs.com/~armandourbina)).

All projects are under the Apache 2.0 License

## 🔌 Installation

Install [npm](https://www.npmjs.org/package/@redoper1/xlsx-js-style):

```sh
npm install @redoper1/xlsx-js-style
```

Install browser:

```html
<script lang="javascript" src="dist/xlsx.min.cjs"></script>
```

## 🗒 Core API

- Refer to the [SheetJS](https://sheetjs.com/) documentation for core API reference
- Current version of sheetjs used: **0.20.3**

## 🗒 Style API

### Cell Style Demo

[Browser Demo](https://github.com/redoper1/xlsx-js-style/tree/master/demos/browser)

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
top-level attributes: `alignment`, `border`, `fill`, `font` and `numFmt`.

| Style Attribute | Sub Attributes | Default       | Values/description                                                                                |
| :-------------- | :------------- | :------------ | :------------------------------------------------------------------------------------------------ |
| `alignment`     | `vertical`     | `bottom`      | `"top"` or `"center"` or `"bottom"`                                                               |
|                 | `horizontal`   | `left`        |`"left"` or `"center"` or `"right"`                                                                |
|                 | `wrapText`     | `false`       | `true` or `false`                                                                                 |
|                 | `readingOrder` |               | `2` // for right-to-left                                                                          |
|                 | `textRotation` | `0`           | Number from `0` to `180` or `255`                                                                 |
|                 |                |               | `45` is rotated up 45 degrees                                                                     |
|                 |                |               | `90` is rotated up 90 degrees                                                                     |
|                 |                |               | `135` is rotated down 45 degrees                                                                  |
|                 |                |               | `180` is rotated down 180 degrees                                                                 |
|                 |                |               | `255` is special, aligned vertically                                                              |
| `border`        | `top`          |               | `{ style: BORDER_STYLE, color: COLOR_SPEC }`                                                      |
|                 | `bottom`       |               | `{ style: BORDER_STYLE, color: COLOR_SPEC }`                                                      |
|                 | `left`         |               | `{ style: BORDER_STYLE, color: COLOR_SPEC }`                                                      |
|                 | `right`        |               | `{ style: BORDER_STYLE, color: COLOR_SPEC }`                                                      |
|                 | `diagonal`     |               | `{ style: BORDER_STYLE, color: COLOR_SPEC }`                                                      |
|                 | `diagonalUp`   |               | `true` or `false`                                                                                 |
|                 | `diagonalDown` |               | `true` or `false`                                                                                 |
| `fill`          | `patternType`  | `"none"`      | `"solid"` or `"none"`                                                                             |
|                 | `fgColor`      |               | foreground color: see `COLOR_SPEC`                                                                |
|                 | `bgColor`      |               | background color: see`COLOR_SPEC`                                                                 |
| `font`          | `bold`         |               | font bold`true` or `false`                                                                        |
|                 | `color`        |               | font color `COLOR_SPEC`                                                                           |
|                 | `italic`       | `false`       | font italic `true` or `false`                                                                     |
|                 | `name`         | `"Calibri"`   | font name                                                                                         |
|                 | `strike`       | `false`       | font strikethrough `true` or `false`                                                              |
|                 | `sz`           | `"11"`        | font size (points)                                                                                |
|                 | `underline`    | `false`       | font underline `true` or `false`                                                                  |
|                 | `vertAlign`    |               | `"superscript"` or `"subscript"`                                                                  |
| `numFmt`        |                | `0`           | `"0"` // integer index to built in formats, see StyleBuilder.SSF property                         |
|                 |                |               | `"0.00%"` // string matching a built-in format, see StyleBuilder.SSF                              |
|                 |                |               | `"0.0%"` // string specifying a custom format                                                     |
|                 |                |               | `"0.00%;\\(0.00%\\);\\-;@"` // string specifying a custom format, escaping special characters     |
|                 |                |               | `"m/dd/yy"` // string a date format using Excel's format notation                                 |

#### **COLOR_SPEC**: Colors for `fill`, `font`, and `border` are specified as objects, either:

- `{ auto: 1 }` specifying automatic values
- `{ rgb: "FFFFAA00" }` specifying a hex ARGB value
- `{ theme: "1", tint: "-0.25" }` specifying an integer index to a theme color and a tint value (default 0)
- `{ indexed: 64 }` default value for `fill.bgColor`

#### **BORDER_STYLE**: Border style is a string value which may take on one of the following values:

- `dashDotDot`
- `dashDot`
- `dashed`
- `dotted`
- `hair`
- `mediumDashDotDot`
- `mediumDashDot`
- `mediumDashed`
- `medium`
- `slantDashDot`
- `thick`
- `thin`

#### **Border Notes**

Borders for merged areas are specified for each cell within the merged area. For example, to apply a box border to a merged area of 3x3 cells, border styles would need to be specified for eight different cells:

- left borders for the three cells on the left,
- right borders for the cells on the right
- top borders for the cells on the top
- bottom borders for the cells on the left

## 🙏 Thanks

- [gitbrent/xlsx-js-style](https://github.com/gitbrent/xlsx-js-style)
- [sheetjs](https://git.sheetjs.com/sheetjs/sheetjs/)
- [js-xlsx](https://github.com/protobi/js-xlsx)
- [sheetjs-style](https://www.npmjs.com/package/sheetjs-style)
- [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2)

## 🔖 License

Please consult the attached [LICENSE](https://github.com/redoper1/xlsx-js-style/blob/master/LICENSE) file for details. All rights not explicitly
granted by the Apache 2.0 License are reserved by the Original Author.
