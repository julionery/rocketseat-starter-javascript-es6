
// Exercícios: Módulo 03

// Exercício
// Transforme os seguintes trechos de código utilizando async/await:

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();

// RESPOSTA
async function umPorSegundo2(){
    console.log('1s');
    await delay()
    console.log('2s');
    await delay()
    console.log('3s');
}

umPorSegundo2();

import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


// RESPOSTA
async function getUserFromGithub2(username){
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub2('diego3g');
getUserFromGithub2('diego3g124123');



class Github {
    static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Repositório não existe');
    })
    }

    // RESPOSTA
    static async getRepositoriesAsync(repo){
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('JulioNery/rocketseat-curso-javascript-es6');
Github.getRepositories('rocketseat/dslkvmskv');

// RESPOSTA
Github.getRepositoriesAsync('JulioNery/rocketseat-curso-javascript-es6');
Github.getRepositoriesAsync('rocketseat/dslkvmskv');


const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
}
buscaUsuario('diego3g');


// RESPOSTA
const buscaUsuario2 = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
buscaUsuario2('diego3g');