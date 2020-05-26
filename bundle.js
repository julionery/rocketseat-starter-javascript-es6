// OBJECT SHORT SYNTAX
// const nome = "Julio";
// const idade = 28;
// const usuario = {
//     nome,
//     idade,
//     empresa: 'Rockectseat'
// }
// console.log(usuario);
// TEMPLATE LITERALS
// const nome = "Julio";
// const idade = 28;
// // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); // OLD
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`); // NEW 
// OPERADORES REST/SPREAD
// REST
// const usuario = {
//     nome: 'Julio',
//     idade: 23,
//     empresa: 'Rocketseat'
// }
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [1,2,3,4]
// const [ a, b, ...c];
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }
// function soma(a, b, ...params){
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 3, 4, 5, 6));
// SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [ ...arr1, ...arr2 ];
// console.log(arr3);
// const usuario1 = {
//     nome: 'Julio',
//     idade: 28,
//     empresa: 'Rocketseat'
// }
// const usuario2 = { ...usuario1, nome: 'Cesar' }
// console.log(usuario2);
// DESESTRUTURAÇÃO
// const usuario = {
//     nome: 'Julio',
//     idade: 28,
//     endereco: {
//         cidade: 'Rio Verde',
//         estado: 'GO'
//     }
// }
// // const nome = usuario.nome;
// // const idade = usuario.idade;
// // const endereco = usuario.endereco.cidade;
// const { nome, idade, endereco: {cidade} } = usuario;
// // console.log(nome);
// // console.log(idade);
// // console.log(cidade);
// function mostraNome({ nome, idade}){
//     console.log(nome, idade);
// }
// mostraNome(usuario);
// VALORES PADRÃO
// // function soma(a = 3, b = 6){
// //     return a + b;
// // }
// const some = (a = 3, b = 6) =>a +b;
// console.log(soma(1));
// console.log(soma());
// ARROW FUNCTIONS
// const arr = [1, 3, 4, 5, 8, 10];
// const newArr = arr.map(item => item + 2);
// console.log(newArr);
// const teste = () => ({ nome: 'Julio' });
// console.log(teste());
// VETORES
// const arr = [1, 3, 4, 5, 8, 10];
// const newArr = arr.map(function(item, index){
//     return item + index;
// });
// console.log(newArr);
// const sum = arr.reduce(function(total, next){
//     return total + next;
// });
// console.log(sum);
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item === 2;
// });
// console.log(find);
// VARIAVEIS DE ESCOPO
// function teste(x){
//     let y = 2;
//     if(x > 5){
//         console.log(x, y);
//     }
// }
// teste(10);
// CONSTANTS
// const a = 1;  //constante não pode ter o seu valor reatribuido
// const usuario = { nome: 'Julio' };
// usuario.nome = 'Cesar';
// console.log(usuario.nome);
// CLASSE ESTATICA
// class Matematica{
//     static soma(a, b){
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1,2));
// FIM CLASSE ESTATICA
// class List {
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     constructor(){
//         super();
//         this.usuario = "Julio";
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
// }
// MinhaLista.mostraUsuario();
"use strict";
