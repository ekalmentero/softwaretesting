// alunos.js
import axios from 'axios';

class Alunos {
    static all() {
        return axios.get('/alunos.json').then(resp => resp.data);
    }
}

export default Alunos;