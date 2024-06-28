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
        axios.post('http://localhost:5000/confirmation',data)
        .then(()=>Swal.fire({position: "center",
            icon: "success",
            title: "sua duvida foi enviada",
            showConfirmButton: false,
            timer: 1500
            }))
        .catch((error)=>{Swal.fire({title: "erro no servidor",
            icon:"error",
        });console.log(error)})
    }
    return(
    <BlockStyle>
        <EmailBlock>
            <h2>
                Gostou , nos envie um email
            </h2>
            <div className="formMold">
                <label> Nome:</label>
                <input type="text" name="name" placeholder="seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>email:</label>
                <input type="text" name="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>mensagem:</label>
                <textarea name="message" placeholder="Qual a sua duvida?" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button onClick={()=>{emailSender(name,message,email)}}> Enviar </button>
            </div>
        </EmailBlock>
    </BlockStyle>)
}

export default EmailFormer

