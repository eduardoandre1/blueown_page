import { useState } from "react"
import styled from "styled-components"
import emailNodeMailSender from "./nodesMailer"
import Loanding from "../components/loadBox"
import formSubmitFunction from "./formSubmitFunction"
function FormBlock(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [tel, setTel] = useState('')
    const [resquest, setResquest] = useState('invisible')
    async function sendEmail(){
        setResquest('loading')
        const nodeMailer =await  emailNodeMailSender({name:name,email:email,message:message})
        console.log(nodeMailer)
        if(nodeMailer.data === 'enviado' ){
            setResquest('sucess')
            setTimeout(() => setResquest('invisible'),2000)
        }else{
            const formSubmit= await formSubmitFunction({name:name,message:message})
            console.log(formSubmit)
            if(formSubmit.data.success){
                setResquest('sucess')
                setTimeout(() => setResquest('invisible'),2000)
            }
        }
    }
    return(
        <>
            <Loanding state={resquest} />
            <FormStyle>
                <h2 className="titulo" >Dúvidas, Orçamentos ou Primeiro Contato</h2>
                <input className="inputStyle 1" type="text" placeholder="Nome: " value={name} required onChange={(event)=>{setName(event.target.value)}} required></input>
                <input className="inputStyle 2" type="email"  placeholder="Email: " value={email} onChange={(event)=>{setEmail(event.target.value)}} required></input>
                <input className="inputStyle 3" type="tel"  placeholder="Telephone: " value={tel} onChange={(event) => {setTel(event.target.value)}} required></input>
                <textarea className="textarea inputStyle" placeholder="Mensagem: "  name="message" value={message} onChange={(event)=>{setMessage(event.target.value)}} required></textarea>
                <button className="inputStyle 4" type="submit" disabled={resquest==="invisible"?false:true} onClick={async ()=>{await sendEmail()}}>enviar</button>
            </FormStyle>
        </>
    )
}
export default FormBlock

const FormStyle = styled.form`
 display: grid;
 width: 100%;
 height: 100%;
 grid-template-rows: repeat(11, 1fr);
 grid-gap: 15px;
 z-index: 2;
 .titulo {
    grid-row: 1 / 4;
    grid-column: 1;
    display: block;
    width: 100%;
    height: 100%;
 }
 .textarea{
    grid-row: 7 / 10 ;
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
    height: max-content;
    justify-content: center;
    align-items: end;
    color: #B1E3FC;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 35px;
    height: 100%;
 }
`