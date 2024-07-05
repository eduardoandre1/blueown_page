import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
export default function EmailNodeMailer(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [resposte,setResposte] = useState('email enviado')
    
    const confirmBlock = styled.div`
    display: ${resposte=="email enviado"?'none':"flex"};
    `
    function ApiSender(name, email, message){
        axios.post(`${import.meta.env.VITE_API}`,{name:name,email:email,message:message})
        .then(()=>{alert('foi');setResposte('foi')})
        .catch(()=>alert('não foi'))
    }

    return (
        <>
        <form >
            <div className={confirmBlock}>
                <div>
                    {resposte}
                </div>
            </div>
            <label> Nome:</label>
            <input type="text" placeholder="seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>email:</label>
            <input type="text"  placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>mensagem:</label>
            <textarea name="message" placeholder="Qual a sua duvida?" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button type='submit' onSubmit={ApiSender(name,email,message)} >enviar </button>
        </form>
        </>
    )
}