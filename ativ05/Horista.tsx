import { Funcionarios } from "./Funcionarios";

    const valorHora: number = 0;
    const quantidadeHoras: number = 0;

export class Horista extends Funcionarios {
    
    calcularSalario(salario: number): void {
        salario = valorHora * quantidadeHoras;
        console.log (salario);
    }
}