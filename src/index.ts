import { isValidCPF } from 'js-cpf-validation';
import { isValidCNPJ } from 'js-cnpj-validation';

export function isCPForCNPJ(cpfOrCnpj: string): boolean {

    if (!cpfOrCnpj) return false;
    
    cpfOrCnpj = cpfOrCnpj.replace(/\D/g, "");
    
    if (cpfOrCnpj.length === 11) return isValidCPF(cpfOrCnpj);
    if (cpfOrCnpj.length === 14) return isValidCNPJ(cpfOrCnpj);

    return false;
}