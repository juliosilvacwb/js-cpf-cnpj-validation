"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCPForCNPJ = void 0;
const js_cpf_validation_1 = require("js-cpf-validation");
const js_cnpj_validation_1 = require("js-cnpj-validation");
function isCPForCNPJ(cpfOrCnpj) {
    if (!cpfOrCnpj)
        return false;
    cpfOrCnpj = cpfOrCnpj.replace(/\D/g, "");
    if (cpfOrCnpj.length === 11)
        return (0, js_cpf_validation_1.isValidCPF)(cpfOrCnpj);
    if (cpfOrCnpj.length === 14)
        return (0, js_cnpj_validation_1.isValidCNPJ)(cpfOrCnpj);
    return false;
}
exports.isCPForCNPJ = isCPForCNPJ;
