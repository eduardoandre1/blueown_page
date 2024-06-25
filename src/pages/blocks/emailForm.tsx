import { useState } from "react";
import EmailBlock from "../../styles/emailForm/emailFormStyle";
import axios from "axios";
import BlockStyle from "../../styles/context_block";


function EmailFormer(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    return(
    <BlockStyle>
        <EmailBlock>
            <h2>
                Gostou , nos envie um email
            </h2>
            <form onSubmit={async ()=> await axios.post('https://blueowl-em-jsvanilla-1.onrender.com/confirmation',{name:name,email:email,message:message})
            .then(()=>alert('foi'))
            .catch(()=>alert('não foi'))
            }>
                <input type="text" name="name" placeholder="seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <textarea name="message" placeholder="Qual a sua duvida?" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <input type="submit" />

            </form>
        </EmailBlock>
    </BlockStyle>)
}

export default EmailFormer

