import { Funcionarios } from "./Funcionarios";

    const salarioHora: number = 0;
    const horasTrabalhadas: number = 0;

export class Jornada extends Funcionarios {

    calcularSalario(salario: number): void {
        salario = salarioHora * horasTrabalhadas;
        console.log (salario);
    }
}