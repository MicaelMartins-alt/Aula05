import { Veiculo } from "./Veiculos";

export class Ferrari implements Veiculo {

    ligar(): void {
        console.log("O carro está ligando")
    }

    desligar(): void {
        console.log("O carro está desligando")
    }

    manobrar(): void {
        console.log("O carro está manobrando")
    }

    engatar(): void {
        console.log("O carro está engatando")
    }

    acelerar(): void {
        console.log("O carro está acelerando")
    }

    frear(): void {
        console.log("O carro está freando")
    }
}