import { Profissao } from './Profissao';
import { Telefone } from './Telefone';

export class User {

	id: Number;
	login: String;
	senha: String;
	nome: String;
	cpf: String;
	dataNascimento: String;
	profissao: Profissao = new Profissao();
	telefones: Array<Telefone>;
	salario: DoubleRange;

}
