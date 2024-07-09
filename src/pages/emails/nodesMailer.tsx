import axios from 'axios';
interface inputEmailNodeMail {
    name: string;
    email: string;
    message: string;
}
export default function emailNodeMailSender({name, email, message}:inputEmailNodeMail){
        axios.post(`${import.meta.env.VITE_API}`,{name:name,email:email,message:message})
        .then(()=>{alert('foi')})
        .catch(()=>alert('não foi'))
}