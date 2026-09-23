import { Calculos } from "./Calculos";

export class Calculando implements Calculos {

    somar(): number{
        return 10 + 5;
    }

    sub(): number{
        return 10 - 5;
    }

    mult(): number{
        return 10 * 5;
    }

    div(): number{
        return 10 / 5;
    }

    exp(): number {
        return 10 ** 5;
    }
}