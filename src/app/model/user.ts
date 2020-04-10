import { Telefone } from './telefone';

export class User {

    id: number;
    login: string;    
    nome: string;
    cpf: string;
    senha: string;
    telefones: Array<Telefone>;
    dataNascimento: string;
}
