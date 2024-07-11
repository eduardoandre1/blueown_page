import axios from "axios";
import { inputEmail } from "./inputEmail";
export default function ({name,email,message}:inputEmail){
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/6405334ddcbb2d8e208b506c1a5a1e62', {
        name: name,
        message: message,
        email: email
    })
        .then(() => alert('sucessfully submitted'))
        .catch(() => alert('erro'));  
}