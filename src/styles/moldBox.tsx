import styled from "styled-components";
const  MoldBoxStyle = styled.section<{$height:string ; $width:string} >`
.moldBox2 h2 {
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #B1E3FC;
    text-align: center;
    font-size: 60px;
    margin-top: 10px;
    margin-bottom: 40px;
    height: 70px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Rubik Mono One";
}
.moldBox2 {
    padding:15px;
    position: relative;
    width: ${props => props.$width? props.$width:'80dvw'};
    height: ${props => props.$height? props.$height:'40dvh'};
    background-color: #0F0F0F;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin:0  auto ;
    margin-top: 30px;
}
.moldBox2::before{
    content: "";
    position: absolute;
    width: 80dvw;
    height: 40dvh;
    background: radial-gradient(#FA32F4 ,black);
    animation: animate 6s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}
.moldBox2::after{
    content:'';
    position: absolute;
    background-color: #0F0F0F;
    inset: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@keyframes animate {
    0%{transform:translate(-55%,-55%)}
    25%{transform:translate(55%,-55%)}
    50%{transform:translate(55%,55%)}
    75%{transform:translate(-55%,55%)}
    100%{transform:translate(-55%,-55%)}
}

@media(max-width: 768px) {
    .moldBox{
        width: 85dvw;
        height: fit-content;
        margin-top: 15px;

    }
}
`
export default MoldBoxStyle