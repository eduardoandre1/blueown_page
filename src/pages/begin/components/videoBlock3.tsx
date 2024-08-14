import styled from 'styled-components'
import video from './../../../videos/blueowpage_video3.mp4'
import { useState, useRef, useEffect } from 'react'



function VideoBlockTree() {
    const [show, setShow] = useState('hidden')
    const referencial = useRef(null);
    useEffect(() => {
        const observador = new IntersectionObserver(([entries]) => {
            if (entries.isIntersecting) {
                setShow('show')
            }
            else {
                setShow('hidden')
            }
        })
        if (referencial.current) {
            observador.observe(referencial.current);
        }
    }, [])

    return (
        <SectionStyle>
            <video loop muted autoPlay   ref={referencial}>
                <source src={video} type="video/mp4"></source>
            </video>
            <h2 className={show}>Conect-se</h2>
        </SectionStyle>)
}
export default VideoBlockTree

const SectionStyle = styled.div`
width: 100dvw;
height: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
.space{
    height: 120dvh;
    width: 100%;
}
h2 {
    color: white;
    height: max-content;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: oblique;
    font-size: clamp(20px,8px + 8dvw, 4rem);
    justify-content: center;
    width: 80%;
    z-index: 1;
    transition: all 1s linear;
    text-align: center;
    text-shadow: black 2px 2px;
}
video{
    width:100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    bottom: 0;
    transition: all 1s linear;
    
}
.show {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);

}
.show:nth-child(1){
    transition-delay:200px;
}
.hidden{
    opacity: 0;
    transition: all 1s;
    transform: translateY(150%);
    filter: blur(5px);
}
p{
    color: white;
    font-size: clamp(12px, 20px + 6dvw, 2rem);
    width: 100%;
    animation: uptext 1s linear;
    z-index: 1;
    transition: all 1s linear;
    transition-delay: 500ms;
    text-align: center;
    text-shadow: black 2px 2px;
}
@media (max-width: 768px) {
    height: 80dvh;
}
@keyframes uptext {
    0% {opacity: 0 ; transform:translateY(-20%)}
    40% {opacity: 1}
    100% {transform:translateY(0)} 
}
@keyframes fade {
    0% {opacity: 0 }
    100% {opacity: 1}
}
`