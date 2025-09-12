import axios from 'axios';

const URL_API = 'http://localhost://3307'

 export async function PostUSer(nome, email, senha) {
    const resposta = await axios.post(URL_API + "/register", {name: nome , email: email, password: senha})
    return resposta.data
}
