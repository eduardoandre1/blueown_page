import axios from 'axios';
import { inputEmail } from './inputEmail';
export  default async function emailNodeMailSender({name, email, message}:inputEmail){
    const repost = await axios.post(`${import.meta.env.VITE_API}/confirmation`,{name:name,email:email,message:message})
    return repost;
}