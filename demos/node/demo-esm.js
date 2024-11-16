/*
 * NAME: demo-esm.js
 * AUTH: David Rychlý (https://github.com/redoper+/)
 * DATE: 20221116
 * DESC: xlsx-js-style feature demos for Node.js
 * REQS: npm 14.x + `npm install pptxgenjs`
 * USAGE: `node demo-esm.js`       (runs local tests with callbacks etc)
 */

import { readFile, utils, writeFile, version, style_version, set_fs } from "xlsx-js-style";
import fs from "fs";

let _debug = false;
const runArgs = process.argv.slice(2);
for (let i = 0; i < runArgs.length; i++) {
	if (runArgs[i] === '--debug') {
		_debug = true;
	}
}

console.log(`\n\n--------------------==~==~==~==[ STARTING DEMO... ]==~==~==~==--------------------\n`);
console.log("DEBUG .................. = " + (_debug ? "true" : "false"));
console.log("`XLSX.version` ......... = " + version);
console.log("`XLSX.style_version` ... = " + style_version);

console.log(`\n`);
// Set FS
set_fs(fs);
console.log('Set FS');

console.log(`\n--------------------==~==~==~==[ STARTING CREATE PART... ]==~==~==~==--------------------\n`);
{
	// STEP 1: Create a new Workbook
	const wb = utils.book_new();
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
	const ws = utils.aoa_to_sheet([row1, row2, row3]);
	ws["!cols"] = [{ width: 30 }, { width: 20 }, { width: 20 }];
	console.info('Worksheet created');
	if (_debug) console.log(JSON.stringify(ws, null, 2));
	utils.book_append_sheet(wb, ws, "node-esm-demo");
	console.info('Worksheet appended to workbook');
	if (_debug) console.log(JSON.stringify(wb, null, 2));

	// STEP 4: Write Excel file to FS
	try {
		writeFile(wb, "xlsx-js-style-demo-esm.xlsx");
		console.info('Workbook written to FS');
	} catch (err) {
		console.error(err);
	}
}

console.log(`\n--------------------==~==~==~==[ ...CREATE PART COMPLETE ]==~==~==~==--------------------\n`);
console.log(`\n--------------------==~==~==~==[ STARTING READ PART... ]==~==~==~==--------------------\n`);
{
	// Read Excel file from FS
	let wb;
	try {
		wb = readFile("xlsx-js-style-demo-esm.xlsx", { type: "string" });
		console.info('Workbook read from FS');
		console.log(JSON.stringify(wb, null, 2));
	} catch (err) {
		console.error(err);
	}
}
console.log(`\n--------------------==~==~==~==[ ...READ PART COMPLETE ]==~==~==~==--------------------\n`);

console.log(`\n--------------------==~==~==~==[ ...DEMO COMPLETE ]==~==~==~==--------------------\n\n`);
