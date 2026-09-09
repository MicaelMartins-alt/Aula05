import { Computador } from "./Computador";

export class Home implements Computador {

    ligar(): void {
        console.log("O computador está ligando...")
    }

    reiniciar(): void {
        console.log("O computador está reiniciando")
    }

    desligar(): void {
        console.log("Desligando...")
    }

    carregandoSistema(): void {
        console.log("Carregando Sistema")
    }
}