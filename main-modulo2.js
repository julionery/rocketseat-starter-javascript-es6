import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo("JulioNery");
Api.getUserInfo("JulioNery12312312");


//// ASYNC / AWAIT

// const minhaPromisse = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK')
//     }, 2000);
// });

// minhaPromisse()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });



// async function  executaPromise(){
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// executaPromise();

// ARROW FUNCTION

// const executaPromise = async () => {
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// executaPromise();

//// IMPORT / EXPORT

// import * as funcoes from './funcoes';
// import soma, { sub } from './funcoes';
// import { soma as somaFunction, sub } from './funcoes';
// import somaFunction from './soma';

// console.log(funcoes.soma(1,2));
// console.log(soma(1,2));
// console.log(sub(1,2));