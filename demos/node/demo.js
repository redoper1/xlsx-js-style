/*
 * NAME: demo.js
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DATE: 20220404
 * DESC: xlsx-js-style feature demos for Node.js
 * REQS: npm 14.x + `npm install pptxgenjs`
 * USAGE: `node demo.js`       (runs local tests with callbacks etc)
 */

import XLSX from "xlsx-js-style/dist/xlsx.min.cjs";

let _debug = false;
const runArgs = process.argv.slice(2);
for (let i = 0; i < runArgs.length; i++) {
	if (runArgs[i] === '--debug') {
		_debug = true;
	}
}

console.log(`\n\n--------------------==~==~==~==[ STARTING DEMO... ]==~==~==~==--------------------\n`);
console.log("DEBUG .................. = " + (_debug ? "true" : "false"));
console.log("`XLSX.version` ......... = " + XLSX.version);
console.log("`XLSX.style_version` ... = " + XLSX.style_version);

console.log(`\n`);

// STEP 1: Create a new Workbook
const wb = XLSX.utils.book_new();
console.info('Workbook created');
if (_debug) console.log(JSON.stringify(wb, null, 2));

// STEP 2: Create data rows
let row1 = ["a", "b", "c"];
let row2 = [1, 2, 3];
let row3 = [
	{ v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
	{ v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
	{ v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
	{ v: "line\nbreak!", t: "s", s: { alignment: { wrapText: true } } },
];
console.info('Created data rows created');
if (_debug) console.log(JSON.stringify([row1, row2, row3], null, 2));

// STEP 3: Create Worksheet, add data, set cols widths
const ws = XLSX.utils.aoa_to_sheet([row1, row2, row3]);
ws["!cols"] = [{ width: 30 }, { width: 20 }, { width: 20 }];
console.info('Worksheet created');
if (_debug) console.log(JSON.stringify(ws, null, 2));
XLSX.utils.book_append_sheet(wb, ws, "node-demo");
console.info('Worksheet appended to workbook');
if (_debug) console.log(JSON.stringify(wb, null, 2));

// STEP 4: Write Excel file to FS
try {
	XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
	console.info('Workbook written to FS');
} catch (err) {
	console.error(err);
}

console.log(`\n--------------------==~==~==~==[ ...DEMO COMPLETE ]==~==~==~==--------------------\n\n`);
