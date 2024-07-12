import axios from 'axios';
import { inputEmail } from './inputEmail';
export  default async function emailNodeMailSender({name, email, message}:inputEmail){
    await axios.post(`${import.meta.env.VITE_API}`,{name:name,email:email,message:message})
        .then(()=>{console.log('sucess');return 'sucess' })
        .catch(()=>{console.log('erro');return 'error' })
}