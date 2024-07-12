import axios from "axios";
export  default function ({name,message}){
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    const post = axios.post('https://formsubmit.co/ajax/6405334ddcbb2d8e208b506c1a5a1e62', {
    name: name,
    message: message
    })
    .then((respost)=>{ console.log(respost);return respost})
    .catch((err)=>{return err})
    return post     
}
    