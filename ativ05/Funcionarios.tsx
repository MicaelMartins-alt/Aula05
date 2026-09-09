export abstract class Funcionarios {

private id: number;
private nome: string;
private telefone: string;
private matricula: number;
private endereco: string;

constructor (
    id: number,
    nome: string,
    telefone: string,
    matricula: number,
    endereco: string

) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.matricula = matricula;
    this.endereco = endereco;
}

public getId(): number{
    return this.id;
}

public setId(id: number): void {
    this.id = id;
}

public getNome(): string{
    return this.nome;
}

public setNome(nome: string): void {
    this.nome = nome;
}

public getTelefone(): string{
    return this.telefone;
}

public setTelefone(telefone: string): void {
    this.telefone = telefone;
}

public getMatricula(): number{
    return this.matricula;
}

public setMatricula(matricula: number): void {
    this.matricula = matricula;
}

public getEndereco(): string{
    return this.endereco;
}

public setEndereco(endereco: string): void {
    this.endereco = endereco;
}
}