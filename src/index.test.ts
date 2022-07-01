import { isCPForCNPJ } from ".";

describe('Tests for CPF or CNPJ', () => {

    test('Test a valid CPF without mask', () => {
        expect(isCPForCNPJ("32595891049")).toBeTruthy();
    });

    test('Test a valid CPF with mask', () => {
        expect(isCPForCNPJ("490.752.150-29")).toBeTruthy();
    });
    
    test('Test a invalid CPF', () => {
        expect(isCPForCNPJ("32595891000")).toBeFalsy();
    });
    
    test('Test a empty CPF', () => {
        expect(isCPForCNPJ('')).toBeFalsy();
    });

    test('Testing a valid CNPJ without mask', () => {
        expect(isCPForCNPJ("40397773000178")).toBeTruthy();
    })
    
    test('Testing a valid CNPJ with mask', () => {
        expect(isCPForCNPJ("88.601.412/0001-28")).toBeTruthy();
    })

    test('Testing a invalid CNPJ', () => {
        expect(isCPForCNPJ("40397773000100")).toBeFalsy();
    })
    
    test('Testing a empty CNPJ', () => {
        expect(isCPForCNPJ("")).toBeFalsy();
    })
    
});