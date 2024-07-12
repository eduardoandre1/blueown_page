import { useState } from "react"
import styled from "styled-components"
import emailNodeMailSender from "./nodesMailer"
import Loanding from "../components/loadBox"
import formSubmitFunction from "./formSubmitFunction"
function FormBlock(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [resquest, setResquest] = useState('invisible')
    async function sendEmail(){
        setResquest('loading')
        const nodeMailer =await  emailNodeMailSender({name:name,email:email,message:message})
        console.log(nodeMailer)
        const formSubmit= await formSubmitFunction({name:name,message:message})
        console.log(formSubmit.data.success)
       
        if(nodeMailer.data === 'enviado' && formSubmit.data.success){
            setResquest('sucess')
        }
    }
    return(
        <div>
            <Loanding state={resquest} />
            <FormStyle>
                <h2 className="titulo" >Entre em contato Conosco</h2>
                <input className="inputStyle" type="text" name="name" placeholder="Seu Nome" value={name} required onChange={(event)=>{setName(event.target.value)}}></input>
                <input className="inputStyle" type="email" name="email"  placeholder="Seu melhor email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required></input>
                <textarea className="textarea inputStyle" placeholder="duvidas , orçamentos ou primeiro contato  "  name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}} required></textarea>
                <button className="inputStyle" type="submit" disabled={resquest==="invisible"?false:true} onClick={async ()=>{await sendEmail()}}>enviar</button>
            </FormStyle>
        </div>
    )
}
export default FormBlock

const FormStyle = styled.div`
 display: grid;
 width: 100%;
 grid-template-rows: repeat(8, 1fr);
 grid-gap: 20px;
 .titulo {
    grid-row: 1 / 3;
    grid-column: 1;
    display: block;
    width: 100%;
 }
 .textarea{
    grid-row: 5 / 7;
    grid-column: 1;
    padding: 10px;
 }
 .inputStyle{
   border-radius: 15px;
   padding: 10px;
   width: 90%;
   margin: 0 auto;
 }
 h2{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: end;
    color: #B1E3FC;
    text-align: center;

    font-size: 40px;
 }
`