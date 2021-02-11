import axios from 'axios'; //npm install axios -save 


const  instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});


instance.defaults.headers.common['Authorization'] = "AUTH TOKEN";

export default instance;