import axios from 'axios';

// export default axios.create({
//     baseURL:'localhost:8080',
//     // headers: {"ngrok-skip-browser-warning": "true"}
// });

export default axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 20000,
    headers: {"Content-type":"application/json" }
});