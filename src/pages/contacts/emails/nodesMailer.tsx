import axios from 'axios';
import { inputEmail } from './inputEmail';
export  default async function emailNodeMailSender({name, email, message}:inputEmail){
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(`${import.meta.env.VITE_API}`,{name:name,email:email,message:message})
        .then(()=>{alert('success')})
        .catch(()=>{alert('error')})
}