import {Ferrari} from "./Ferrari";
import { Porsche } from "./Porsche";

const carro1 = new Ferrari; 

console.log("------Ferrari-------")
carro1.acelerar();
carro1.desligar();
carro1.engatar();
carro1.frear();
carro1.ligar();
carro1.manobrar();

const carro2 = new Porsche;
console.log("------Porsche-------")

carro2.acelerar();
carro2.desligar();
carro2.engatar();
carro2.frear();
carro2.ligar();
carro2.manobrar();