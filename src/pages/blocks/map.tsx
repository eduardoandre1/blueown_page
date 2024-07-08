import styled from "styled-components"
import localization from"../../../src/assets/localization.png";
import instagram from "../../../src/assets/instagram.svg";
import linkedin from "../../../src/assets/linkedin.svg"
import whatsapp from "../../../src/assets/whatsapp.svg"

export default function MapBlock(){
    return(
        <Mapblockstyle>
            <div className='titulo' >Siga nos em nossas redes Sociais</div>
            <div className='redeLinks' >
                <a href="google.com"><img src={instagram} alt="" srcset="" />instagram</a>
                <a href="google.com"><img src={linkedin} alt="" srcset="" />linkedin</a>
                <a href="google.com"><img src={whatsapp} alt="" srcset="" />whatsaap</a>
            </div>
            <div className='titulo' >nossa localização</div>
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
height: 560px;
grid-template-rows: 80px 75px 80px 180px 25px;
grid-gap: 15px;
.titulo {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: end;
    color: #B1E3FC;
    text-align: center;

    font-size: 40px;
 }
 .redeLinks {
 grid-row: 2;
 width: 100%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
        a{
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: flex-start;
            font-size:25px;
            color: white;
            
        }
        img{
            width: 35px;
            height: 35px;
            margin-right: 8px;
        }
    }
.map{
    grid-row: 4;
    width: auto;
    height: auto;;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        height: 250px;
        width: 400px;
    }
}
p {
    width: 100%;
    color:  white;
    align-items: center;
    justify-content: center;
    display: flex;
    margin : 0 auto;
}

`