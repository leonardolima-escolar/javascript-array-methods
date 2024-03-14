interface Usuarios {
  id: number;
  nome: string;
  idade: number;
  ativo: boolean;
}

const usuarios: Usuarios[] = [
  { id: 1, nome: "João", idade: 20, ativo: true },
  { id: 2, nome: "Maria", idade: 25, ativo: false },
  { id: 3, nome: "José", idade: 30, ativo: true },
  { id: 4, nome: "Pedro", idade: 35, ativo: false },
  { id: 5, nome: "Paulo", idade: 40, ativo: true },
  { id: 6, nome: "João", idade: 50, ativo: true },
];

const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

const usuariosMaior25 = usuarios.filter((usuario) => usuario.idade > 25);

const novoArrayApenasComNomes = usuarios.map((usuario) => usuario.nome);

const usuariosComMais1Ano = usuarios.map((usuario) => {
  return { ...usuario, idade: usuario.idade + 1 };
});

usuarios.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome}, Ativo: ${usuario.ativo}`);
});

const idadeTotal = usuarios.reduce(
  (total, usuario) => total + usuario.idade,
  0
);

const quantidadeUsuariosAtivos = usuarios.reduce((total, usuario) => {
  return usuario.ativo ? total + 1 : total;
}, 0);

const primeiroComNomeJoao = usuarios.find((usuario) => usuario.nome === "João");

const primeiroUsuarioInativo = usuarios.find((usuario) => !usuario.ativo);

// console.log(`Usuários: ${usuarios}`);

console.log(`Usuários Ativos:`);
usuariosAtivos.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome}, Ativo: ${usuario.ativo}`);
});

console.log(`Usuários com mais de 25 anos:`);
usuariosMaior25.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome}, Id: ${usuario.id}`);
});

console.log(`Nomes: ${novoArrayApenasComNomes}`);

console.log(`Usuários com mais 1 ano:`);
usuariosComMais1Ano.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
});

console.log(`Idade Total: ${idadeTotal}`);
console.log(`Quantidade de Usuários Ativos: ${quantidadeUsuariosAtivos}`);
console.log(`Primeiro usuário com nome João: ${primeiroComNomeJoao?.id}`);
console.log(`Primeiro usuário inativo: ${primeiroUsuarioInativo?.nome}`);
