//import { useState } from "react"
function FormSubmit(){
    // const [name, setName] = useState('')
    //const [email, setEmail] = useState('')
    //const [message, setMessage] = useState('')
    return(
        <form target="_blank" action="https://formsubmit.co/6405334ddcbb2d8e208b506c1a5a1e62" method="POST">
            <input type="text" name="name" placeholder="Name" required></input>
            <input type="email" name="email"  placeholder="Email Address" required></input>
            <input type="hidden" name="_autoresponse" value="your custom message"></input>
            <textarea placeholder="Your Message"  name="message" required></textarea>
            <button type="submit" >enviar</button>
        </form>
    )
}
export default FormSubmit