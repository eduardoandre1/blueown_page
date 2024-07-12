import { useState } from "react"
import styled from "styled-components"
import emailNodeMailSender from "./nodesMailer"
import Loanding from "../components/loadBox"
function FormBlock(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [resquest, setResquest] = useState('invisible')
    function sendEmail(){
        setResquest('loading')
        emailNodeMailSender({name:name,email:email,message:message})
        .then(setResquest('sucess'))
        .catch(console.log())
    }
    return(
        <form target="blank"  action="https://formsubmit.co/6405334ddcbb2d8e208b506c1a5a1e62" method="POST">
            <Loanding state={resquest} />
            <FormStyle>
                <h2 className="titulo" >Entre em contato Conosco</h2>
                <input className="inputStyle" type="text" name="name" placeholder="Seu Nome" value={name} required onChange={(event)=>{setName(event.target.value)}}></input>
                <input className="inputStyle" type="email" name="email"  placeholder="Seu melhor email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required></input>
                <textarea className="textarea inputStyle" placeholder="duvidas , orçamentos ou primeiro contato  "  name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}} required></textarea>
                <input type="hidden" name="_autoresponse" value="Bom dia caro cliente "></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" value="http://localhost:5173/contatos"></input>
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_cc" value={email}></input>
                <button className="inputStyle" type="submit" onClick={()=>{sendEmail()}}>enviar</button>
                <div></div>
            </FormStyle>
        </form>
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