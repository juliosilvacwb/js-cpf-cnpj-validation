"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('Tests for CPF or CNPJ', () => {
    test('Test a valid CPF without mask', () => {
        expect((0, _1.isCPForCNPJ)("32595891049")).toBeTruthy();
    });
    test('Test a valid CPF with mask', () => {
        expect((0, _1.isCPForCNPJ)("490.752.150-29")).toBeTruthy();
    });
    test('Test a invalid CPF', () => {
        expect((0, _1.isCPForCNPJ)("32595891000")).toBeFalsy();
    });
    test('Test a empty CPF', () => {
        expect((0, _1.isCPForCNPJ)('')).toBeFalsy();
    });
    test('Testing a valid CNPJ without mask', () => {
        expect((0, _1.isCPForCNPJ)("40397773000178")).toBeTruthy();
    });
    test('Testing a valid CNPJ with mask', () => {
        expect((0, _1.isCPForCNPJ)("88.601.412/0001-28")).toBeTruthy();
    });
    test('Testing a invalid CNPJ', () => {
        expect((0, _1.isCPForCNPJ)("40397773000100")).toBeFalsy();
    });
    test('Testing a empty CNPJ', () => {
        expect((0, _1.isCPForCNPJ)("")).toBeFalsy();
    });
});
