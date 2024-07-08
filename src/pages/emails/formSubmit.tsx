//import { useState } from "react"
import styled from "styled-components"
function FormSubmit(){
    // const [name, setName] = useState('')
    //const [email, setEmail] = useState('')
    //const [message, setMessage] = useState('')
    return(
        <form target="_blank" action="https://formsubmit.co/6405334ddcbb2d8e208b506c1a5a1e62" method="POST">
            <FormStyle>
                <h2 className="titulo" >Entre em contato Conosco</h2>
                <input className="border-radios" type="text" name="name" placeholder="Seu Nome" required></input>
                <input className="border-radios" type="email" name="email"  placeholder="Seu melhor email" required></input>
                <input type="hidden" name="_autoresponse" value="your custom message"></input>
                <textarea className="textarea border-radios" placeholder="Sua duvida ou apenas o seu Bom dia "  name="message" required></textarea>
                <button className="border-radios" type="submit" >enviar</button>
                <div></div>

            </FormStyle>
        </form>
    )
}
export default FormSubmit

const FormStyle = styled.div`
 display: grid;
 width: 100%;
 grid-template-rows: repeat(8, 1fr);
 grid-gap: 20px;
 .titulo {
    grid-row: 1 / 3;
    grid-column: 1;
    display: block;
 }
 .textarea{
    grid-row: 5 / 7;
    grid-column: 1;
 }
 .border-radios{
    border-radius: 15px;
 }
`