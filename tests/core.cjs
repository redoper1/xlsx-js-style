const XLSX = require("@redoper1/xlsx-js-style");
const fs = require('fs'), assert = require('assert');

describe('xlsx-js-style module', function () {
    it('should be a object', function () {
        assert(typeof XLSX === 'object');
    });

    it('should contain version', function () {
        assert(XLSX.version);
    });

    it('should contain style version', function () {
        assert(XLSX.style_version);
    });
});

const sampleData = [
    ["a", "b", "c"],
    [1, 2, 3],
    [
        { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
        { v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
        { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
        { v: "line\nbreak!", t: "s", s: { alignment: { wrapText: true } } },
    ]
];

const testData = {
    xlsxFileName: "test.xlsx",
    sheetName: "test",
    data: sampleData
}

describe('create xlsx', function () {
    let ws, wb;
    it('should create worksheet', function () {
        ws = XLSX.utils.aoa_to_sheet(testData.data);
        assert(ws);
    });

    it('should create workbook', function () {
        wb = XLSX.utils.book_new();
        assert(wb);
    });

    it(`should add worksheet named "${testData.sheetName}" to workbook`, function () {
        XLSX.utils.book_append_sheet(wb, ws, testData.sheetName);
        assert(wb.SheetNames[0] == testData.sheetName);
        assert(wb.Sheets[testData.sheetName]);
    });

    it(`should write workbook to file "${testData.xlsxFileName}"`, function () {
        XLSX.writeFile(wb, testData.xlsxFileName);
        assert(fs.existsSync(testData.xlsxFileName));
    });
});

describe('read xlsx', function () {
    let wb, ws, wsData;
    it(`should read file "${testData.xlsxFileName}"`, function () {
        wb = XLSX.readFile(testData.xlsxFileName);
        assert(wb);
    });

    it(`should get worksheet named "${testData.sheetName}"`, function () {
        ws = wb.Sheets[testData.sheetName];
        assert(ws);
    });

    it(`should get data from worksheet`, function () {
        wsData = XLSX.utils.sheet_to_json(ws);
        assert(wsData);
    });
});