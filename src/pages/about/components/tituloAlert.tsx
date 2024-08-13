import styled from "styled-components";
import background from "../../../assets/animated-text-fill.png"

export default function AlertBlock(){
    return(<AlertTitleStyle>
        <h2>
            <span>
                Soluções feitas a sua medida
            </span>
        </h2>
    </AlertTitleStyle>)
}



const AlertTitleStyle = styled.div`
    font: 400 1em/1.5 "Neuton";
    color:white; 
    text-align: center; 
    width: 100dvw;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    h2 {
        text-transform: uppercase;
        letter-spacing: .5em;
        display: flex;
        border-width: 4px 0;
        padding: 1.5em 0em;
        height: 60px;
        margin-bottom: 40px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    span {
        font: 700 4em/1 "Rubiks", sans-serif;
        letter-spacing: 0;
        padding: .25em 0 .325em;
        display: block;
        
        color: red;
        background: url(${background}) repeat-y;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-animation: aitf 80s linear infinite;
	    transform: translate3d(0,0,0);
	    -webkit-backface-visibility: hidden;
        font-size: clamp(25px, 6dvw , 50px);
    }
    @keyframes aitf {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
`