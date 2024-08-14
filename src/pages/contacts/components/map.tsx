import styled from "styled-components"
import localization from"../../../../src/assets/localization.png";
import instagram from "../../../../src/assets/instagram.svg";
import linkedin from "../../../../src/assets/linkedin.png"
import whatsapp from "../../../../src/assets/whatsapp.png"

export default function MapBlock(){
    return(
        <Mapblockstyle>
            <div className='titulo' >Siga nos em nossas redes Sociais</div>
            <div className='redeLinks' >
                <a href="instagram.com"><img src={instagram} alt="instagram"  />instagram</a>
                <a href="https://www.linkedin.com/in/blueowl-publicidade-8033a5285/"><img src={linkedin} alt="linkedin"  />linkedin</a>
                <a href="google.com"><img src={whatsapp} alt="whatsaap" />whatsaap</a>
            </div>
            <div className='titulo maptitle' >nossa localização</div>
            <a className="map" href="https://www.google.com/maps/place/R.+da+Concei%C3%A7%C3%A3o,+125+-+Centro,+Niter%C3%B3i+-+RJ,+24020-085/@-22.8940969,-43.1228631,17z/data=!3m1!4b1!4m6!3m5!1s0x9983c398751f5f:0xb30dc2799c8c5da7!8m2!3d-22.8940969!4d-43.1202882!16s%2Fg%2F11c1rtd04x?entry=ttu   ">
                <img src={localization} alt="" />
            </a>
            <p>
            Rua da Conceição 125 sala 1105, Nitéroi, Centro
            </p>
        </Mapblockstyle>
    )
}
const Mapblockstyle = styled.div`
display: grid;
width: 100%;
height: 100%;
grid-template-rows: repeat(10, 1fr);
grid-gap: 5%;
z-index: 2;
.titulo {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: end;
    color: #B1E3FC;
    text-align: center;
    font-family: 'inter';
    font-size: 40px;
 }
 .redeLinks {
 grid-row: 2;
 width: 100%;
 display: flex;
 grid-template-columns: repeat(3, 30%);
 align-items: center;
 justify-content: center;
        a{
            all:unset;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size:campl(8px,5px + 2vw , 25px);
            color: white;
            
        }
        a:hover{
            color: lightblue;
        }
        img{
            width: 35px;
            height: 35px;
            margin-right: 8px;
        }
        img:hover {
        transform: scale(1.2);
    }
    }
.maptitle{
    grid-row: 3;
}
.map{
    grid-row: 4 / 9;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        height: 100%;
        width: 90%;
        cursor: pointer;
    }
    img:hover {
        height: 95%;
        width: 85%;
    }
}
p {
    width: 100%;
    color:  white;
    align-items: center;
    justify-content: center;
    display: flex;
    margin : 0 auto;
    grid-row: 9;
}

`