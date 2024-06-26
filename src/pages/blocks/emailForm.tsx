import { useState } from "react";
import EmailBlock from "../../styles/emailForm/emailFormStyle";
import axios from "axios";
import BlockStyle from "../../styles/context_block";
import Swal from "sweetalert2";



function EmailFormer(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    function emailSender(name: string, message: string, email: string){ 
        const data = {name:name, message:message, email:email}
        axios.post('https://blueowl-em-jsvanilla-1.onrender.com/confirmation',data)
        .then(()=>Swal.fire({position: "top",
            icon: "success",
            title: "sua duvida foi enviada",
            showConfirmButton: false,
            timer: 1500}))
        .catch(()=>alert('error'))
    }
    return(
    <BlockStyle>
        <EmailBlock>
            <h2>
                Gostou , nos envie um email
            </h2>
            <div>
                <input type="text" name="name" placeholder="seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <textarea name="message" placeholder="Qual a sua duvida?" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={()=>{emailSender(name,message,email)}}>enviar</button>

            </div>
        </EmailBlock>
    </BlockStyle>)
}

export default EmailFormer

