import { Funcionarios } from "./Funcionarios";

    const valorBruto: number = 0;
    const imposto: number = 0;

export class PessoaJuridica extends Funcionarios {
    
    calcularSalario(salario: number): void {
        salario = valorBruto - imposto;
        console.log (salario);
    }
}