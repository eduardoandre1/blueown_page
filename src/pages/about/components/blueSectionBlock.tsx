import styled from "styled-components"
import { useState, useRef, useEffect } from 'react'
import AlertBlock from "./tituloAlert";
import PageStyle from "../../../styles/PagesStyle";

export default function BlueSession() {
    const [show, setShow] = useState('hidden')
    const referencial = useRef(null);
    useEffect(() => {
        const observador = new IntersectionObserver(([entries]) => {
            if (entries.isIntersecting) {
                setShow('show')
                console.log('na visão')
            }
            else {
                setShow('hidden')
                console.log('invisivel')
            }
        })
        if (referencial.current) {
            observador.observe(referencial.current);
        }
    }, [])
    return (
        
        <PageStyle>
             <AlertBlock />
             <BlueSessionStyle  ref={referencial}>
               
               <li className={show}>Criação de anúncios e Branding!</li>
               <li className={show}>Planejamento de Mídia!</li>
               <li className={show}>Gerenciamento de Campanhas!</li>
               <li className={show}>Otimização de Mídia!</li>
               <li className={show}>Design de Publicidade!</li>
       </BlueSessionStyle>
        </PageStyle>
    )
}
const BlueSessionStyle = styled.ol`
width: 100dvw;
height: 50dvh;
display: flex;
justify-content: space-between;
flex-direction: column;
margin-top: 90px;
margin-bottom: 20px;
li{
    all:unset;
    background-color:#0448C5 ;
    margin: 0 auto 15px auto;
    width: 80dvw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: max-content;
    //animation: shyning 2s linear infinite;
    border-radius:6px;
    font-size: clamp(15px, 6dvw , 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-wrap: nowrap;
    padding: 5px;
    transition: all 1200ms ease-in-out;
    

}
.show {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);

}
.hidden{
    opacity: 0;
    transition: all 1s;
    transform: translateX(-300%);
    filter: blur(5px);
}

:nth-child(1){
    transition-delay:200ms;
}
:nth-child(2){
    transition-delay:700ms;
}
:nth-child(3){
    transition-delay:1s;
}
:nth-child(4){
    transition-delay:1.3s;
}
:nth-child(5){
    transition-delay:1.5s;
}
`