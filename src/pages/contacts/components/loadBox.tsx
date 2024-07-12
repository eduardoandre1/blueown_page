import styled from "styled-components"
import check from "../../../assets/check.png"

interface inputLoading {
    state: string,
}
export default function Loanding({state}:inputLoading){
    return(
        <LoadingStyle $display={state==='invisible'?"none":'flex'} $image={state==='loading'?'none':"inline"}>
            <div className={state} >
                <img src={check} alt="" />
            </div>
        </LoadingStyle>
    )
}
const LoadingStyle = styled.div<{$display?: string ,$image:string}>`
position: fixed;
width: 100dvw;
height: 100dvh;
left: 0;
top: 0;
justify-content: center;
align-items: center;
z-index: 5;
display: ${props => props.$display};
.loading {
    width: 15dvw;
    height: 15dvw;
    border-radius: 50%;
    border: 2dvw solid lightskyblue;
    border-top: 2dvw solid transparent;
    justify-content: center;
    display: flex;
    align-items: center;
    animation: rotate 1s ease-in-out infinite;
    opacity: 0.8;
}
@keyframes rotate {
        0%{ transform: rotate(0deg)}
        100%{ transform: rotate(360deg)}
    }
.sucess{
    display: flex;
    align-items: center;
    justify-content: center;
    animation: groin 1s alternate infinite;
    opacity: 1;
    z-index: 6;
    position: absolute;
    overflow: hidden;
    border: 2dvw solid #00BA00;
    border-radius: 50%;
    width: 15dvw;
    height: 15dvw;
}
img{
    width: 90%;
    height: 90%;
    border-radius: 50%;
    overflow: hidden;
    display: ${props => props.$image};
}
@keyframes groin {
    0%{ transform: scale(0.001)}
    100%{ transform:scale(1.8)}
}
`